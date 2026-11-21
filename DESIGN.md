# DropIt --- Design System & Experience Specification

**Document:** `DESIGN.md`\
**Product:** DropIt\
**Owner:** KSHITIJ NIGAM\
**Version:** 0.1 --- Design direction draft\
**Status:** Working document --- visual tokens and detailed layouts are
not yet approved\
**Last updated:** 21 November 2026

------------------------------------------------------------------------

## 1. Purpose of this document

This file is the working source of truth for DropIt's visual design and
user experience.

It translates the first Google Stitch exploration and the product
owner's feedback into a design direction that can guide:

-   Future Google Stitch iterations.
-   Frontend implementation.
-   Component design and reuse.
-   Responsive behaviour.
-   Motion and interaction design.
-   Accessibility and usability reviews.
-   Codex implementation tasks and reviews.

This is **not** a claim that the current UI is final. The first Stitch
output is a useful structural starting point, but its typography, colour
palette, background treatment and feature coverage were not accepted as
final.

Whenever a design decision changes, update this document and record the
change in the design decision log.

## 2. Product experience vision

DropIt is a cross-device file-sharing and device-connectivity product.
It should make moving files between devices feel straightforward,
reliable and reassuring.

The experience should feel:

-   **Distinctive:** recognisable as DropIt, not a generic SaaS
    dashboard or a clone of an existing transfer tool.
-   **Professional:** carefully composed, consistent and credible enough
    for a public product launch.
-   **Human:** understandable language, friendly feedback and no
    unnecessary technical jargon.
-   **Enjoyable:** satisfying interactions, purposeful motion and
    thoughtful details.
-   **Trustworthy:** clear consent, honest transfer states, transparent
    limitations and no false success messages.
-   **Calm:** visually rich without clutter, visual noise or distracting
    animation.

The product must not look like an automatically assembled template. Its
personality should come from intentional layout decisions, a considered
type system, distinctive component behaviour, strong content hierarchy
and consistent craft---not from adding decoration everywhere.

### Product experience statement

> DropIt makes moving files between devices feel simple, clear and
> dependable.

This is a working statement, not final marketing copy.

## 3. What we learned from the first Stitch exploration

### Elements worth retaining as a starting point

-   The main screen makes **Send files** and **Receive files** easy to
    discover.
-   The overall information layout is understandable.
-   The home screen gives the two main actions appropriate prominence.
-   Recent activity can be useful when it does not compete with the
    primary workflow.
-   Desktop and mobile layouts were both explored.
-   The initial component sheet gives us a starting point for a reusable
    design system.

### Elements that are not approved

-   The serif/display typography shown in the first exploration.
-   The initial teal, brown and pale-neutral colour combination.
-   The predominantly white/light page background.
-   The current visual styling of cards, buttons and surfaces.
-   The current screen set as a complete representation of the product.
-   The exact navigation layout and responsive behaviour.

Do not treat the first Stitch output as the final brand or design
system.

## 4. Brand and logo rules

DropIt's approved logo assets will be supplied by the owner and placed
in the repository under `src/assets/`.

Rules:

1.  Use the supplied official logo assets.
2.  Do not redraw, reinterpret, stretch, rotate, distort or recolour the
    mark.
3.  Preserve the approved geometry, proportions and colour
    relationships.
4.  Use the correct supplied logo variant for the background and
    available space.
5.  The application header must use the logo asset rather than typing
    the word `DropIt` as a substitute for the logo.
6.  Do not create a new icon or decorative mark that could be mistaken
    for the official logo.
7.  Until the official assets are added, use a clearly temporary
    placeholder in design mockups and implementation.

The exact logo filenames and light/dark variants will be recorded after
the assets are added.

## 5. Product surfaces: two separate experiences

DropIt will have two related but distinct web experiences. They must
share the brand and design language, but they serve different user
intentions.

### 5.1 Public marketing website

Purpose: explain the product, establish trust, communicate value and
guide visitors into the application.

This is a separate public-facing website---not simply the application's
home screen with a hero section added.

Potential sections, to be validated and prioritised:

-   Hero section with a clear product promise and primary call to
    action.
-   How DropIt works.
-   Key capabilities and real product benefits.
-   Supported platforms and compatibility information.
-   Privacy and security explanation.
-   Reliability and transfer transparency.
-   Product screenshots or interactive demonstrations.
-   Frequently asked questions.
-   Help, contact and legal links.
-   Clear entry points to open the application or sign in.

Marketing pages must only describe capabilities that exist or are
clearly labelled as planned. Do not publish invented speed claims,
unlimited-transfer claims, compatibility promises or unsupported
security statements.

Marketing motion should be expressive but restrained. It must not delay
access to the product or make the page difficult to use.

### 5.2 DropIt application

Purpose: let a person send, receive and manage transfers.

The application is a functional workspace. It should prioritise the
transfer workflow over marketing content.

Primary application actions:

-   Send files.
-   Receive files.

Supporting areas may include:

-   Activity / transfer history.
-   Devices.
-   Profiles.
-   Settings.
-   Help and support.

Only show navigation destinations when their functionality exists. Do
not create dead controls or pretend that unfinished capabilities are
available.

## 6. Application entry and first-time experience

The planned first-time experience is:

1.  Application launch.
2.  Branded launch/splash experience.
3.  First-time onboarding walkthrough.
4.  Authentication / account access.
5.  Profile setup and preferences.
6.  Application home.

Returning users should not be forced through the onboarding walkthrough
every time. The app should remember that onboarding has been completed,
subject to the account/session model and the user's ability to revisit
the introduction from Help or Settings.

### 6.1 Launch / splash screen

The launch screen should:

-   Use the official DropIt logo asset.
-   Establish the product identity quickly.
-   Use a short, purposeful transition into the next screen.
-   Avoid long decorative loading sequences.
-   Show a genuine loading state only when the application is actually
    loading.
-   Respect reduced-motion preferences.

A splash screen must not become an unnecessary obstacle between the user
and the product.

### 6.2 Onboarding walkthrough

The initial concept is a four-screen walkthrough. The exact copy and
illustrations will be finalised during design review.

The four screens should explain the product in a concise sequence:

1.  **Move files between devices** --- introduce the core purpose.
2.  **Connect the way that works** --- explain that connection methods
    depend on device and network conditions; do not promise universal
    direct connectivity.
3.  **Stay in control** --- explain receiver approval, transfer
    visibility and privacy choices.
4.  **Know when it's done** --- explain progress, verification and clear
    completion.

Onboarding requirements:

-   Four screens maximum for the initial concept.
-   Visible progress indicator.
-   Next and Back controls.
-   Skip option where appropriate.
-   A clear final action such as `Get started`.
-   Short, understandable copy.
-   Illustrations or motion that explain an idea rather than merely
    decorate.
-   Keyboard and screen-reader support.
-   Reduced-motion alternative.
-   Do not repeat onboarding for every launch.

### 6.3 Authentication

Authentication follows onboarding in the proposed first-time journey.

The final authentication methods are not yet decided. The UI should be
designed to accommodate the selected methods without committing to
unsupported providers or flows.

Requirements:

-   Clear sign-in and account-creation paths.
-   Calm, readable forms.
-   Clear validation and error messages.
-   Password visibility control when passwords are used.
-   Loading, success and failure states.
-   Recovery flow for account access.
-   Avoid asking for unnecessary personal information.
-   Explain why a requested piece of information is needed.

The product owner must decide whether guest transfers remain available
before or after authentication. Do not assume that all users must create
an account merely because an authentication screen is part of the
planned first-time journey.

### 6.4 Profile setup --- not mandatory KYC

The phrase "know your customer" needs a product-level distinction.

DropIt is a file-sharing product. Formal identity verification/KYC
should **not** be assumed to be necessary for ordinary file transfers.
It can create privacy friction and require collection of sensitive
personal data.

For the initial design direction, interpret this stage as **profile
setup and personalisation**, not formal KYC.

Possible profile setup fields may include:

-   Display name.
-   Profile image or avatar, optional.
-   Basic preferences.
-   Device name, where useful.

Collect only information with a clear product purpose. Formal identity
verification should only be introduced if a specific legal, payment,
fraud-prevention or business requirement is established and reviewed.

## 7. Multiple profiles under one account

DropIt should explore a multiple-profile model inspired by the
convenience of profile switching in streaming services, while keeping
the use case appropriate for a file-transfer product.

### Concept

-   One account can contain multiple user profiles.
-   A user can select a profile after signing in.
-   Each profile has its own display name and optional avatar.
-   Profiles may have separate preferences and activity views if the
    product requirements justify that separation.
-   The account owner can manage, edit or remove profiles.
-   The product will have a defined maximum number of profiles per
    account.

### Decisions still required

-   Maximum profile count.
-   Whether profiles are private spaces or only personalisation layers.
-   Whether transfer history is separated by profile.
-   Whether devices are account-wide or profile-specific.
-   Whether child/managed profiles are needed at all.
-   Whether profile switching requires re-authentication for sensitive
    actions.

Do not copy Netflix's interface literally. Use the multiple-profile
concept only as a usability reference. DropIt must create its own
interaction model.

Do not imply that multiple profiles provide separate security identities
unless the backend authorization model actually enforces that
separation.

## 8. Navigation and application shell

The application should include a hamburger menu as a recognisable
navigation entry point.

The exact menu contents will be refined, but possible destinations are:

-   Home.
-   Send files.
-   Receive files.
-   Activity.
-   Devices.
-   Profiles / Switch profile.
-   Settings.
-   Help.

Navigation rules:

-   Keep the most important actions easy to reach.
-   Do not overload the menu with rarely used destinations.
-   Show the active destination clearly.
-   Use descriptive labels with icons; do not rely on icons alone.
-   Support keyboard navigation and accessible menu semantics.
-   On small screens, the menu must be touch-friendly and easy to
    dismiss.
-   Preserve the user's context when opening and closing the menu where
    practical.
-   Do not show unfinished features as active destinations.

The hamburger menu is a product direction, not permission to hide the
primary Send and Receive actions. Those actions must remain prominent in
the application.

## 9. Core information architecture

The initial application structure should support the following journeys.

### Entry and account

-   Launch / splash.
-   Onboarding.
-   Sign in.
-   Create account.
-   Account recovery.
-   Profile setup.
-   Profile selection / switching.

### Main application

-   Home.
-   Send files.
-   Review selected files.
-   Create transfer session.
-   Pairing / waiting for receiver.
-   Receive files / join session.
-   Incoming transfer request.
-   Accept or reject.
-   Transfer progress.
-   Verification.
-   Success / result.
-   Failure / recovery.

### Supporting areas

-   Activity / transfer history.
-   Devices, if implemented.
-   Profile management.
-   Settings.
-   Help and support.

### System states

-   Loading.
-   Empty.
-   Offline.
-   Permission denied.
-   Unsupported browser or platform.
-   Invalid or expired session.
-   Receiver rejected.
-   Connection interrupted.
-   Storage unavailable.
-   Verification failed.
-   Maintenance or service unavailable.

## 10. Core transfer UX requirements

The UI must accurately communicate the transfer lifecycle.

Expected states include:

-   Selecting files.
-   Reviewing files.
-   Creating a session.
-   Waiting for receiver.
-   Connecting.
-   Receiver approval required.
-   Transferring.
-   Paused, where supported.
-   Interrupted.
-   Resuming, where supported.
-   Verifying.
-   Completed.
-   Failed.
-   Cancelled.
-   Expired.

Rules:

1.  Never show `Complete` merely because the sender finished
    transmitting or uploading.
2.  Show a successful result only after the required integrity checks
    pass.
3.  Make the receiver's identity/context and incoming file summary
    visible before approval.
4.  Explain the connection route only when the actual transport layer
    can report it accurately.
5.  Do not imply pause, resume or retry capabilities until implemented
    and tested.
6.  Display consistent file sizes and explain limits before transfer.
7.  Make destructive actions such as cancelling an active transfer clear
    and deliberate.
8.  Provide calm, actionable error messages.
9.  Do not use colour as the only indication of state.
10. Do not expose internal protocol details to ordinary users unless
    they are presented in an optional diagnostic view.

Preferred user-facing language:

-   `Send files`
-   `Receive files`
-   `Waiting for receiver`
-   `Connecting`
-   `Transferring`
-   `Verifying file`
-   `Transfer complete`

## 11. Visual direction and atmosphere

### 11.1 Background

The predominantly white background in the first Stitch output is not
approved.

Explore a richer, more atmospheric interface with a non-white primary
canvas. The final background direction is not selected yet.

Possible directions for exploration:

-   Deep, muted dark surfaces.
-   Warm, low-glare dark neutrals.
-   Layered surfaces with carefully controlled contrast.
-   A light theme as a deliberate secondary theme, if it can be made
    equally polished.

Do not choose the final background colour by guesswork. Present a small
number of coherent palette directions and compare them in real
application screens.

### 11.2 Colour

The first teal/brown palette is not approved.

The final palette must be selected through deliberate design exploration
and must also respect the official logo's fixed colour relationships.

Colour requirements:

-   A clear primary brand treatment.
-   Distinct surface levels.
-   Strong readable text.
-   Accessible contrast.
-   Semantic success, warning, error and information colours.
-   Consistent hover, focus, pressed and disabled states.
-   No excessive use of accent colours.
-   No decorative gradient overload.

**Status:** exact colour tokens are pending owner approval.

### 11.3 Typography

The first Stitch typography is not approved.

Explore modern, highly legible typography with a distinctive but
professional personality.

Typography should:

-   Feel contemporary and crafted.
-   Work well in long labels, file names and technical metadata.
-   Have a clear hierarchy.
-   Remain readable at small sizes.
-   Support the languages required by the product.
-   Use tabular numerals where useful for file sizes, timers and
    progress.
-   Avoid overly decorative display fonts in functional workflows.

The final typeface families, weights, sizes and line heights are pending
review.

### 11.4 Cards, surfaces and depth

Cards should have a clear purpose and hierarchy.

Avoid turning every element into a separate floating card. Use grouping,
spacing, dividers and surface contrast where appropriate.

Depth should be restrained and consistent. Shadows, borders and surface
changes should clarify interaction and hierarchy rather than create
visual noise.

### 11.5 Icons and illustration

-   Use one consistent icon family or a carefully governed custom icon
    set.
-   Use labels for important navigation and actions.
-   Avoid arbitrary emoji as interface icons.
-   Illustrations should explain product concepts or make empty states
    more welcoming.
-   Do not create alternate DropIt brand marks.

## 12. Motion and animation principles

DropIt should use polished, professional animation. Motion is part of
the experience, not decoration added at the end.

Potential motion moments:

-   Branded launch transition.
-   Onboarding transitions.
-   Navigation drawer open/close.
-   File selection and removal.
-   Drag-and-drop acceptance feedback.
-   Pairing connection state changes.
-   Transfer progress.
-   File-level completion.
-   Verification.
-   Success confirmation.
-   Profile switching.

Motion rules:

1.  Every animation must communicate state, hierarchy, continuity or
    feedback.
2.  Keep routine interactions quick and responsive.
3.  Use longer motion only for meaningful transitions or explanatory
    onboarding.
4.  Avoid constant movement in the background.
5.  Avoid excessive parallax, bouncing, glowing and spring effects.
6.  Do not block critical actions while an animation plays.
7.  Respect `prefers-reduced-motion`.
8.  Provide non-animated state changes where needed.
9.  Test animation performance on ordinary mobile hardware.
10. Avoid animation that makes transfer progress look faster or more
    certain than it is.

Exact durations and easing curves will be defined after the visual
direction is approved.

## 13. Responsive design

The product will be used across desktop and mobile devices.

Design deliberately for each form factor rather than shrinking a desktop
page.

### Desktop

-   Use available space with intention.
-   Keep important actions in predictable locations.
-   Avoid excessively wide content.
-   Make the navigation drawer usable with mouse and keyboard.
-   Give file lists and transfer details enough room.

### Mobile

-   Prioritise Send and Receive.
-   Keep controls touch-friendly.
-   Keep file names and sizes readable.
-   Ensure pairing codes and QR codes are easy to use.
-   Make incoming approval clear.
-   Avoid dense tables and cramped card layouts.
-   Ensure the navigation drawer works with touch, keyboard and
    assistive technology.

Tablet layouts should be considered during implementation and testing.

Exact breakpoints are pending and must be based on layout behaviour
rather than device-brand assumptions.

## 14. Accessibility and inclusive interaction

Accessibility is a release requirement, not a visual polish task.

-   All actionable controls must have accessible names.
-   Keyboard-only users must be able to complete supported flows.
-   Focus indicators must be visible.
-   Text and controls must meet appropriate contrast requirements.
-   Colour must not be the only status signal.
-   Screen readers should receive meaningful state changes without
    excessive announcements.
-   Text should remain usable at enlarged browser/system font settings.
-   Dialogs and drawers must manage focus correctly.
-   QR pairing must have a readable alternative such as a code or
    copyable link where feasible.
-   Motion must respect reduced-motion preferences.
-   Error messages must identify the problem and provide a useful next
    step.

## 15. Content and microcopy

Use concise, direct and human language.

Prefer familiar verbs and explain technical concepts only when
necessary.

Avoid:

-   Fake urgency.
-   Unexplained technical jargon.
-   Vague errors such as `Something went wrong` without a next step.
-   Unsupported claims such as `Instant`, `Unlimited`, `100% secure` or
    `Works everywhere`.
-   Overly playful copy during security, consent or failure states.

The tone should be confident, calm and helpful.

## 16. Design and implementation boundaries

The UI must not pretend that a feature exists when only a visual mockup
has been created.

Keep the following distinctions clear:

-   **Designed:** shown in a mockup or prototype.
-   **Implemented:** present in the application code.
-   **Tested:** verified against defined acceptance criteria.
-   **Released:** available to real users.

A visual control must not be presented as functional until it is
connected to a real implementation.

Transport route labels, progress, expiry timers, verification states and
device information must ultimately be driven by authoritative
application state---not hard-coded demonstration values.

The frontend should keep presentation separate from transfer lifecycle
logic. UI components should not independently invent transfer state.

## 17. Design review checklist

Before approving a screen, review:

### Product clarity

-   Is the purpose of the screen obvious?
-   Is the next action clear?
-   Does the screen support a real product requirement?

### Visual quality

-   Does it feel recognisably like DropIt?
-   Is the hierarchy intentional?
-   Are typography and colour consistent with the approved system?
-   Is there enough breathing room?
-   Does it avoid generic template styling?

### Interaction

-   Are controls understandable?
-   Are loading, empty, success and failure states considered?
-   Does motion have a purpose?
-   Can users recover from mistakes?

### Responsive behaviour

-   Does the screen work at desktop and mobile sizes?
-   Are touch targets comfortable?
-   Does content reflow naturally?

### Accessibility

-   Is contrast sufficient?
-   Is keyboard focus visible?
-   Are labels and status changes accessible?
-   Is reduced motion supported?

### Engineering readiness

-   Can the design be implemented with reusable components?
-   Are any interactions technically unsupported?
-   Are functional assumptions documented?
-   Are assets and fonts properly licensed and available?

## 18. Design change and review reporting

Every meaningful design or implementation improvement should be
traceable.

When a task is completed, the task report should include:

1.  Task ID and title.
2.  Objective.
3.  Files or screens changed.
4.  What was changed.
5.  Design decisions made.
6.  Features implemented versus only mocked.
7.  Tests or review steps performed.
8.  Results and evidence.
9.  Known issues or incomplete work.
10. Risks or decisions requiring owner approval.
11. Suggested next task.

Do not report a task as complete if important acceptance criteria remain
unmet.

The owner will review the report, test the result and provide feedback.
Follow-up improvements should be recorded as new tasks or revisions
rather than silently changing unrelated areas.

## 19. Open design decisions

The following items are intentionally not finalised:

  -----------------------------------------------------------------------
  Decision                            Current status
  ----------------------------------- -----------------------------------
  Final colour palette                Pending exploration and owner
                                      approval

  Final background / theme direction  White-first rejected; new direction
                                      pending

  Font families and type scale        First Stitch typography rejected;
                                      pending

  Logo assets and variants            Owner will add approved assets

  Marketing website layout and page   Needs separate exploration
  list

  Application shell and hamburger     Direction selected; detailed layout
  menu layout                         pending

  Splash screen animation             Concept approved; execution pending

  Four onboarding screens             Direction selected; content and
                                      visuals pending

  Authentication methods              Product/technical decision pending

  Guest access relative to            Open product decision
  authentication

  Profile setup fields                Pending

  Formal KYC                          Not assumed; requires a justified
                                      requirement

  Maximum profiles per account        Pending product decision

  Profile data separation and         Pending architecture decision
  permissions

  Transfer route labels and           Must reflect actual transport
  diagnostics                         capabilities

  Motion durations and easing         Pending prototype review

  Responsive breakpoints              Pending implementation validation

  Activity/history scope              Pending product prioritisation
  -----------------------------------------------------------------------

## 20. Version history

  -----------------------------------------------------------------------
  Version                 Date                    Changes
  ----------------------- ----------------------- -----------------------
  0.1                     21 November 2026        Created initial design
                                                  direction from the
                                                  first Stitch
                                                  exploration and owner
                                                  feedback. Recorded
                                                  rejected typography,
                                                  palette and white
                                                  background; added
                                                  separate marketing
                                                  website, launch flow,
                                                  four-screen onboarding,
                                                  authentication, profile
                                                  setup, multiple
                                                  profiles, hamburger
                                                  navigation, motion,
                                                  review and reporting
                                                  rules.

  -----------------------------------------------------------------------

------------------------------------------------------------------------

**Working rule:** When the owner approves a design decision, update this
document. Until then, treat it as a proposal---not an implementation
requirement that overrides a later explicit decision.
