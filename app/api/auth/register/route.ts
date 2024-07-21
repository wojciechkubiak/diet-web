import { Auth } from "@/app/models/Auth";
import { Token } from "@/app/models/Token";
import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request: Request): Promise<NextResponse<Token>> => {
  const registerData: Auth = await request.json();

  console.log(registerData);

  try {
    const response = await axios("", {});
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};
