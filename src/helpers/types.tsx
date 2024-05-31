export type dataEntry = {
    name: string;
    date: string;
    desc: string;
}

export type DashProp = {
    title: string;
    description: string;
    cardType: "standard" | "linkcard" | "imgcard";
    list: dataEntry[];
}

export type User = {
    email: string;
    password?: string;
    name?: string;
    id?: string;
}

export type AuthCreds = {
    email: string;
    password?: string;
}

export type authState = {
    user: User;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string;
}

const x: DashProp = {
    title: "",
    description: "",
    cardType: "imgcard",
    list: [
        {name: "", date: "", desc: ""}
    ]
}

if(x.cardType === "imgcard"){
    console.log("hello")
}