import React, { useEffect } from "react";
import parseJwt from "../parseJwt";
import { useRouter } from "next/router";
import { getGlobalState } from "../../state";

function useNotAuthen() {
  const router = useRouter();
  const token = getGlobalState("token");

  useEffect(() => {
    const userToken = parseJwt(token);
    if (!userToken) {
      router.push("/login");
    }
  }, [token, router]);
}

export { useNotAuthen };
