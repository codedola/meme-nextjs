import React, { useEffect } from "react";

import parseJwt from "../parseJwt";
import { useRouter } from "next/router";
import { useGlobalState } from "../../state";

function useAuthen() {
  const router = useRouter();
  const [token] = useGlobalState("token");

  useEffect(() => {
    const userToken = parseJwt(token);
    if (userToken && userToken.id && userToken.email) {
      router.push("/");
    } else {
    }
  }, [token, router]);
}

export { useAuthen };
