import React, { useEffect } from "react";
import parseJwt from "../parseJwt";
import { useRouter } from "next/router";
import { useGlobalState } from "../../state";

function useNotAuthen() {
  const router = useRouter();
  const [token] = useGlobalState("token");

  useEffect(() => {
    const userToken = parseJwt(token);
    if (!userToken) {
      router.push("/login");
    }
  }, [token, router]);
}

export { useNotAuthen };
