import { Auth } from "@/lib/models/Auth";
import { Token } from "@/lib/models/Token";
import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const loginData: Auth = await request.json();

  return await axios
    .post("http://localhost:3001/api/v1/auth/signin", loginData)
    .then((response: { data: { accessToken: string } }) => {
      return NextResponse.json(response.data);
    })
    .catch(
      (error: {
        response: {
          data: { message: string; statusCode: number };
        };
      }) => {
        return NextResponse.json(
          { error: error.response.data.message },
          { status: error.response.data.statusCode }
        );
      }
    );
};
