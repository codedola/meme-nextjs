import React, { useEffect } from "react";

import parseJwt from "../parseJwt";
import { useRouter } from "next/router";
import { getGlobalState } from "../../state";

function useAuthen() {
  const router = useRouter();
  const token = getGlobalState("token");

  useEffect(() => {
    const userToken = parseJwt(token);
    if (userToken && userToken.id && userToken.email) {
      router.push("/");
    } else {
    }
  }, [token, router]);
}

export { useAuthen };
