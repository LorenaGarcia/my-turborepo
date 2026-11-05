"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import * as Styled from "./header.styles";
import { getHeaderNavItems, isNavItemActive } from "./header.utils";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const navItems = getHeaderNavItems();

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContainer>
        <Styled.BrandButton onClick={() => router.push("/")}>
          <Styled.BrandTextGroup>
            <Styled.BrandTitle>
              Villa Navideñ
              <Styled.HatLetterWrapper>
                a
                <Styled.SantaHatImage
                  src="/santa-hat.png"
                  alt="Gorro navideño"
                />
              </Styled.HatLetterWrapper>
            </Styled.BrandTitle>
          </Styled.BrandTextGroup>
        </Styled.BrandButton>

        <Styled.NavList aria-label="Navegación principal">
          {navItems.map((item) => {
            const active = isNavItemActive(pathname, item.href);
            return (
              <Styled.NavLinkButton
                key={item.id}
                $active={active}
                onClick={() => {
                  if (item.href.startsWith("/")) {
                    router.push(item.href);
                  }
                }}
              >
                {item.label}
              </Styled.NavLinkButton>
            );
          })}
        </Styled.NavList>
      </Styled.HeaderContainer>
    </Styled.HeaderWrapper>
  );
}

export default Header;
