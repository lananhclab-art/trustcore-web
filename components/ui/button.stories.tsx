/**
 * components/ui/button.stories.tsx
 * ─────────────────────────────────────────────────────────────────
 * Visual reference for all Button + Input + EmailForm states.
 * Drop this into Storybook or render directly for visual QA.
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import { Button }    from "./button";
import { Input }     from "./input";
import { EmailForm } from "./email-form";
import { Stack }     from "./stack";
import { Box }       from "./box";
import { Text }      from "./text";

// ─── Demo: Button variants ────────────────────────────────────────

export const ButtonVariants = () => (
  <Stack gap="xxl" direction="vertical">
    {/* Section: All variants at md size */}
    <Stack gap="md" direction="vertical">
      <Text variant="heading-h5" color="primary">Variants</Text>
      <Stack gap="sm" direction="horizontal" align="center" wrap>
        <Button variant="primary">Explore Products</Button>
        <Button variant="secondary">Start Payments</Button>
        <Button variant="ghost">Learn More</Button>
        <Button variant="danger">Delete Account</Button>
        <Button variant="link">View Details</Button>
      </Stack>
    </Stack>

    {/* Section: All sizes — primary */}
    <Stack gap="md" direction="vertical">
      <Text variant="heading-h5" color="primary">Sizes</Text>
      <Stack gap="sm" direction="horizontal" align="center" wrap>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium (default)</Button>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="primary" size="xl">Extra Large</Button>
      </Stack>
    </Stack>

    {/* Section: States */}
    <Stack gap="md" direction="vertical">
      <Text variant="heading-h5" color="primary">States</Text>
      <Stack gap="sm" direction="horizontal" align="center" wrap>
        <Button variant="primary">Default</Button>
        <Button variant="primary" loading>Loading…</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" loading>Loading…</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </Stack>
    </Stack>

    {/* Section: With icons */}
    <Stack gap="md" direction="vertical">
      <Text variant="heading-h5" color="primary">With Icons</Text>
      <Stack gap="sm" direction="horizontal" align="center" wrap>
        <Button
          variant="primary"
          leftIcon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          }
        >
          Download
        </Button>
        <Button
          variant="secondary"
          rightIcon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          }
        >
          Continue
        </Button>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </Button>
      </Stack>
    </Stack>

    {/* Section: Full width */}
    <Stack gap="md" direction="vertical">
      <Text variant="heading-h5" color="primary">Full Width</Text>
      <Button variant="primary" fullWidth>Full Width Primary</Button>
      <Button variant="secondary" fullWidth>Full Width Secondary</Button>
    </Stack>
  </Stack>
);

// ─── Demo: Input variants ─────────────────────────────────────────

export const InputVariants = () => (
  <Stack gap="xxl" direction="vertical" className="max-w-[480px]">
    <Text variant="heading-h5" color="primary">Input Variants</Text>

    <Stack gap="lg" direction="vertical">
      <Input variant="default" placeholder="Default input" />
      <Input variant="default" label="Work Email" placeholder="you@company.com" required />
      <Input variant="default" label="With Hint" placeholder="Enter value" hint="We'll never share your email." />
      <Input variant="error" label="With Error" placeholder="bad@input" error="Please enter a valid email address." />
      <Input variant="default" placeholder="Small input" size="sm" />
      <Input variant="default" placeholder="Large input" size="lg" />
    </Stack>

    {/* Dark variant — shown on a dark bg */}
    <Box bg="inverse" padding="lg" radius="lg">
      <Stack gap="md" direction="vertical">
        <Text variant="body-sm" color="inverse">Dark variant (on dark background)</Text>
        <Input
          variant="dark"
          placeholder="Enter your work email"
          type="email"
        />
      </Stack>
    </Box>
  </Stack>
);

// ─── Demo: Email Form (exact Figma 9056:14682) ────────────────────

export const EmailFormDemo = () => (
  <Stack gap="xxl" direction="vertical">
    <Text variant="heading-h5" color="primary">Email Form (Figma: 9056:14682)</Text>

    {/* On dark background — matches Figma exactly */}
    <Box
      bg="inverse"
      padding="3xl"
      radius="xl"
    >
      <Stack gap="lg" direction="vertical">
        <Text variant="heading-h3" color="inverse">
          Ready to get started?
        </Text>
        <Text variant="body-md" color="inverse">
          Join thousands of teams already using TrustCore.
        </Text>
        <EmailForm
          placeholder="Enter your work email"
          buttonLabel="Contact Us"
          onSubmit={(email) => console.log("Submitted:", email)}
        />
      </Stack>
    </Box>

    {/* On light background */}
    <Box bg="secondary" padding="3xl" radius="xl" border="default">
      <Stack gap="lg" direction="vertical">
        <Text variant="heading-h3" color="primary">
          Subscribe to our newsletter
        </Text>
        <EmailForm
          placeholder="Enter your work email"
          buttonLabel="Subscribe"
        />
      </Stack>
    </Box>
  </Stack>
);

// ─── Full combined demo ───────────────────────────────────────────

export default function ButtonDemo() {
  return (
    <Box padding="3xl">
      <Stack gap="6xl" direction="vertical">
        <Text variant="heading-h2" color="primary">Design System — Buttons & Inputs</Text>
        <ButtonVariants />
        <InputVariants />
        <EmailFormDemo />
      </Stack>
    </Box>
  );
}
