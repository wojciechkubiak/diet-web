import { cookies } from "next/headers";
import axios from "axios";
import { NextResponse } from "next/server";
import { Auth } from "@/app/_models/Auth";

export const POST = async (request: Request) => {
  const loginData: Auth = await request.json();

  return await axios
    .post("http://localhost:3001/api/v1/auth/signin", loginData)
    .then(({ data: { accessToken } }) => {
      cookies().set("session", accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 86400,
        path: "/",
      });

      return NextResponse.json({ accessToken });
    })
    .catch(
      ({
        response: {
          data: { message, statusCode },
        },
      }) => {
        return NextResponse.json({ message }, { status: statusCode });
      }
    );
};
