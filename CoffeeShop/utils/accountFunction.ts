import axios from 'axios';
import AxiosInstance from '../helper/AxiosInstance';
import {ResponseApi, Response} from '../src/models/response';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AccountFunction {
  host: string;

  constructor(host: string) {
    this.host = host;
  }

  checkEmail = (email: string): boolean => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  };

  signIn = async (email: string, password: string): Promise<ResponseApi> => {
    try {
      if (email.length === 0 || password.length === 0) {
        throw new Error('Please input all the fields required');
      }

      if (!this.checkEmail(email)) {
        throw new Error('Please input a valid email');
      }

      const data = {email, password};
      const response: ResponseApi = await AxiosInstance().post(
        `${this.host}/user/signin`,
        data,
      );

      if(!response.status){
        throw new Error(response.message);
      }

      const user: UserLogin = response.data;
      const saveLogin: boolean = await this.saveLoginState(user._id);

      if(!saveLogin){
        throw new Error("Save login fail, please try again after a few minutes");
      }

      const api: ResponseApi = {message: response.message, status: response.status};
      return api;
    } catch (error) {
      let statusText: string;
      //check throwing error from nodejs
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log('Error data:', error.response.data);
          statusText = error.response.data.message;
        } else if (error.request) {
          console.log('Error request:', error.request);
          statusText = error.request;
        } else {
          console.log('Error message:', error.message);
          statusText = error.message;
        }
        console.log('Error config:', error.config);
        statusText = "Error config";
      } else {
        // If the error is not an AxiosError, handle it differently
        console.log('Unexpected error:', error);
        statusText = 'Unexpected error';
      }

      const api: ResponseApi = {message: statusText, status:false};
      return api;
    }
  };

  register = async (email: string, password: string): Promise<Response> => {
    try {
      if (email.length === 0 || password.length === 0) {
        throw new Error('Please input all the fields required');
      }

      if (!this.checkEmail(email)) {
        throw new Error('Please input a valid email');
      }

      const data: UserBase = {email, password};
      const response: ResponseApi = await AxiosInstance().post(
        `${this.host}/user/register`,
        data,
      );
      console.log('Sign up Response:', response);

      return response;
    } catch (error) {
      //check throwing error from nodejs
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log('Error data:', error.response.data);
        } else if (error.request) {
          console.log('Error request:', error.request);
        } else {
          console.log('Error message:', error.message);
        }
        console.log('Error config:', error.config);
      } else {
        // If the error is not an AxiosError, handle it differently
        console.log('Unexpected error:', error);
      }

      return null;
    }
  };

  saveLoginState = async (id: string): Promise<boolean> => {
    try {
      await AsyncStorage.setItem('userID', id);
      return true;
    } catch (error) {
      console.log('SaveloginState function error:', error);
      return false;
    }
  };

  getLoginState = async (): Promise<boolean> => {
    try {
      const id: string | null = await AsyncStorage.getItem('userID');
      if (id != null) {
        return true;
      } else throw new Error('There is no login state yet');
    } catch (error) {
      console.log('GetLoginState function error:', error);
      return false;
    }
  };

  logOut = async (): Promise<boolean> => {
    try {
      await AsyncStorage.removeItem("userID");
      return true;
    } catch (error) {
      console.log('logOut function error:', error);
      return false;
    }
  };
}
