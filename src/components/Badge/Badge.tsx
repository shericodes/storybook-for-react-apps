import styled, { css } from 'styled-components'

import { Body } from '../typography'

const Container = styled.div(
  // access design tokens from theme via styled-component
  ({ theme: { color, borderRadius } }) => css`
    padding: 3px 8px;
    background: ${color.badgeBackground};
    border-radius: ${borderRadius.xs};
    display: inline-block;
    span {
      color: ${color.badgeText};
    }
    span:first-letter {
      text-transform: capitalize;
    }
  `
)

type BadgeProps = {
  text: string
  // We use classname to make the component extensible by styled-components
  className?: string
}

export const Badge = ({ text, className }: BadgeProps) => (
  <Container className={className}>
    {/* use typography component for body text */}
    <Body type="span" size="S">
      {text}
    </Body>
  </Container>
)
