// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../services/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  if (method !== "POST") {
    res.statusCode = 200;
    res.json({
      status: 500,
      message: "Method Not Allowed",
    });
  }

  const data = req.body;

  try {
    const resMemeLogin = await api.callJson("/member/login.php", { data, method });

    const currentTime = new Date();
    const nextYear = new Date(currentTime.getFullYear() + 1, currentTime.getMonth());

    if (resMemeLogin.status === 200) {
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.setHeader("Content-Type", "application/json");
      res.setHeader(
        "Set-Cookie",
        `token=${resMemeLogin.token}; expires=${nextYear.toUTCString}; Path=/`
      );
      res.json(resMemeLogin);
    } else {
      res.statusCode = 302;
      res.setHeader("Location", "/login?error=failed");
      res.json(resMemeLogin);
    }
  } catch (error) {
    res.statusCode = 200;
    res.json({
      status: 500,
      message: "Internal Server Error!",
    });
  }
}
