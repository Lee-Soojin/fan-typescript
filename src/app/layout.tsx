import React from "react";
import StyledComponentsRegistry from "./lib/registry";
import AuthSession from "./authsession";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AuthSession>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AuthSession>
      </body>
    </html>
  );
}
