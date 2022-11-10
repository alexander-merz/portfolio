# Abstraction in TypeScript

Hello World! This is my very first blog post!
Consider the following example of an abstract base class:

```typescript
abstract class OnboardingFactoryBase {
  abstract maxStepCount: number
  abstract create(userSelection: OnboardingUserSelection, options?: OnboardingOptions): OnboardingFlow
}
```
