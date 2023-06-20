import { headers } from "next/dist/client/components/headers";
import { userAgentFromString } from "next/server";

export const deviceIsMobile = () => {
  const headerList = headers();
  const user_agent = headerList.get("user-agent");
  const isMobile =
    userAgentFromString(user_agent || "").device.type === "mobile"
      ? true
      : false;
  return isMobile;
};
