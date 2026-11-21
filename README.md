# DropIt

DropIt is an early-stage cross-platform file-sharing and device-connectivity product. It aims to make moving files between a person's devices easier to understand and more dependable, including clear transfer status and recovery when something goes wrong.

## Project status

DropIt is in early development. The current repository contains an Expo application foundation. File transfer, nearby-device discovery, pairing, resumable transfers, and account features are planned areas; they are not represented here as completed capabilities. No public release date or platform availability commitment has been set.

## Intended platforms

The mobile app is configured with Expo targets for Android, iOS, and web. These are development targets, not a statement that the product is production-ready or fully supported on each platform. Additional platform support remains under evaluation.

## Technology

- Expo SDK 58
- Expo Router 58
- React Native 0.88
- React 19
- TypeScript 6
- npm for mobile dependency management

## Repository structure

```text
apps/
  mobile/       Expo and React Native application
  website/      Reserved for the separate public website; no implementation yet
packages/       Reserved for shared code; no implementation yet
DESIGN.md       Working product design direction
README.md       Project overview and development notes
```

The mobile app's screens are in `apps/mobile/app/`; reusable components and theme helpers are under `components/`, constants under `constants/`, and image/font assets under `assets/`.

## Local development

Install Node.js and npm, then run the app commands from the mobile app directory:

```powershell
cd apps/mobile
npm ci
npm run start
```

Use the platform-specific scripts when needed:

```powershell
npm run android
npm run ios
npm run web
```

The scripts start Expo for the selected target. A compatible development environment/device is needed for native execution. Type-check the app with:

```powershell
npx tsc --noEmit
```

There is currently no root workspace manifest, website package, lint script, or test script.

## Current limitations and planned work

The app does not yet implement end-to-end file sending or receiving, device discovery, secure pairing, transfer history backed by transfer state, resume/retry, integrity verification, or user accounts. The Activity view currently presents an empty state. Public website and shared packages have not been implemented. Transfer architecture, security model, supported-device matrix, and release scope remain to be evaluated before making product claims.

## Development and contributions

Changes should describe actual behavior and keep planned work distinct from implemented and tested functionality. Before contributing, review `DESIGN.md`, use the mobile package scripts above, and report the commands run and any platform limitations. Do not add credentials, local `.env` files, private reports, or generated build output to source control.

**Owner:** KSHITIJ NIGAM
