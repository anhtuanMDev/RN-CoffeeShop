interface UserBase {
    email: string;
    password: string;
}

interface UserLogin extends UserBase {
    _id: string;
    address: string[];
    createdAt: string;
    name?: string;
    avatar?: string;
}