# IMPORTANT — PROJECT-WIDE DEVELOPMENT RULES

These rules apply to the ENTIRE PROJECT and ALL source directories.
They are NOT limited to Purchase Orders.
Before working on ANY feature, page, component, hook, API, utility, type,
route, or other project code, follow these rules.
`.agents/AGENTS.md` is the primary project rulebook and MUST always be read
and followed before making changes.
If these rules conflict with `.agents/AGENTS.md`, ALWAYS follow
`.agents/AGENTS.md`.

==================================================
1. READ & INSPECT BEFORE CODING
==================================================
Before making ANY code change:
1. Read `.agents/AGENTS.md` completely.
2. Inspect the existing implementation.
3. Inspect related:
   - components
   - hooks
   - APIs
   - types
   - utilities
   - mappers
   - constants
   - routes
   - existing consumers
4. Trace the existing data and state flow.
5. Perform an impact analysis before editing.
Never guess how an existing feature works.

==================================================
2. EXISTING BUSINESS LOGIC & API ARE SOURCE OF TRUTH
==================================================
Existing business logic and backend API contracts are the source of truth.
DO NOT change unless explicitly requested:
- API endpoints
- HTTP methods
- request payloads
- response handling
- response mappings
- calculations
- validation
- permissions
- authorization
- routing
- navigation
- state behavior
- existing handlers
- component contracts
- existing user workflows
- existing UI functionality
A refactor must preserve existing behavior 100%.
This applies to EVERY feature in the project.

==================================================
3. API CONTRACT RULE
==================================================
Before modifying or consuming an API:
1. Find the existing API function.
2. Verify the exact endpoint.
3. Verify the HTTP method.
4. Verify request parameters/payload.
5. Verify response structure.
6. Verify field mappings.
7. Find existing consumers.
Never invent a new endpoint or duplicate an existing API wrapper when an
existing integration already handles the requirement.

==================================================
4. SHARED LOGIC & SINGLE SOURCE OF TRUTH
==================================================
Create/Edit, List/Detail, View/Edit, or any other related flows must reuse
the same business logic where applicable.
Do NOT duplicate:
- calculations
- validation
- formatting
- mapping
- filtering logic
- status logic
- shared business rules
If an existing shared utility/hook/helper already provides the required
logic, reuse it.

==================================================
5. SEARCH COMMON UTILITIES & COMPONENTS FIRST
==================================================
Before creating a new:
- component
- hook
- utility
- helper
- mapper
- formatter
- calculation
- constant
search the project first.
Reuse existing implementations whenever they satisfy the requirement.
Do not create duplicate logic just because a new component needs similar
behavior.

==================================================
6. 200–250 LINE REFACTORING RULE
==================================================

Project files should ideally remain around or below 200 lines.

A file may go above 200 lines when its responsibility is genuinely cohesive
and splitting it would reduce readability.

However, files should generally NOT exceed approximately 250 lines.

If a file exceeds 250 lines:

1. Review the file for multiple responsibilities.
2. Identify meaningful extraction opportunities.
3. Check existing hooks, utilities, components, types, mappers, and constants
   before creating anything new.
4. Refactor the file when there is a clear architectural benefit.

The goal is:

- ~200 lines → preferred
- 200–250 lines → acceptable when responsibility is cohesive
- 250+ lines → refactoring should be performed when meaningful extraction
  is possible

DO NOT artificially split files only to satisfy the line limit.

Do NOT:

- create meaningless tiny files
- move random functions just to reduce line count
- create unnecessary abstractions
- duplicate existing logic
- move code without a meaningful architectural responsibility

The purpose of this rule is maintainability and clear separation of
responsibilities, not hitting an arbitrary line count.

==================================================
7. TYPES MUST STAY IN THE TYPE LAYER
==================================================
IMPORTANT:
DO NOT put large or reusable TypeScript types/interfaces into React
components just to reduce the number of files or satisfy line limits.
Use the project's existing type architecture.
For example:
types/
    → interfaces
    → API response types
    → feature/domain types
    → DTO types
components/
    → UI/rendering
hooks/
    → state + feature logic
api/
    → API communication
utils/
    → mappings/helpers/calculations
constants/
    → static configuration/constants
If a type already exists, REUSE IT.
If a new reusable type is required, put it in the appropriate existing
type location.
Do NOT duplicate the same interface across multiple components.
Small component-local types are acceptable when they are genuinely local
and `.agents/AGENTS.md` permits them.

==================================================
8. COMPONENT RESPONSIBILITY
==================================================
Components should primarily focus on UI/rendering.
If a component contains a large amount of:
- API calls
- state management
- business logic
- calculations
- data transformation
- filtering
- pagination
- selection logic
- effects
inspect whether that responsibility should move to:
- custom hooks
- utilities
- mappers
- constants
- existing shared logic
However, do not blindly extract everything.
Only extract meaningful, logically independent responsibilities.

==================================================
9. UI & BEHAVIOR PRESERVATION
==================================================
During refactoring preserve:
- UI layout
- Tailwind classes
- spacing
- typography
- colors
- responsive behavior
- labels
- icons
- interactions
- API data
- calculations
- validation
- navigation
- routing
- pagination
- filtering
- search
- selection
- loading states
- error states
Do not replace real API data with mock/static data unless explicitly
requested.

==================================================
10. DEBUGGING RULE
==================================================
For bugs, trace the complete flow:
Origin
→ API
→ API function
→ Hook
→ Container
→ Component
→ Rendered UI
Find the exact root cause before editing.
Do not apply random defensive patches or unnecessary fallbacks.
Fix the underlying issue with the smallest safe change.

==================================================
11. PROJECT-WIDE AUDIT RULE
==================================================
When asked to audit/refactor the project:
1. Scan the complete `src` directory recursively.
2. Identify large files.
3. Identify files with multiple responsibilities.
4. Identify duplicated logic.
5. Identify duplicated types.
6. Identify duplicated API/data mapping.
7. Identify components containing excessive business logic.
8. Identify oversized hooks/API files/utilities.
9. Compare against `.agents/AGENTS.md`.
10. Refactor only where there is a clear architectural benefit.
Do NOT assume that every file above 200 lines must be split.

==================================================
12. NO UNRELATED CHANGES
==================================================
Only modify files necessary for the requested task/refactor.
Do not perform unrelated:
- formatting
- renaming
- API changes
- UI changes
- architecture rewrites
- dependency changes
unless explicitly requested.

==================================================
13. POST-TASK VERIFICATION
==================================================
After making changes:
Run:
`npx tsc --noEmit`
and when appropriate:
`npm run build`
Also verify affected:
- UI flows
- API interactions
- routing
- calculations
- forms
- filters
- pagination
- detail/list flows
Check for:
- unused imports
- unused variables
- broken imports
- circular dependencies
- duplicate logic
- incorrect types
Never hide TypeScript errors using `any` or `@ts-ignore` unless explicitly
required by the existing project architecture.

==================================================
14. FINAL REPORT
==================================================
After completing the task, report:
### Files Changed
List all:
- created
- modified
- moved
- deleted files
### Extracted Code & Rationale
Explain:
- what was extracted
- where it was moved
- why it belongs there
### Architecture
Explain how the changes follow `.agents/AGENTS.md` and existing project
patterns.
### Business Logic & API Preservation
Explicitly confirm whether:
- endpoints were preserved
- HTTP methods were preserved
- payloads were preserved
- response mappings were preserved
- calculations were preserved
- validation was preserved
- routing was preserved
- UI behavior was preserved
### Verification
Report:
- `npx tsc --noEmit`
- `npm run build`
### Remaining Issues
Clearly list any unresolved errors, limitations, or uncertainties.
NEVER hide an unresolved issue.

==================================================
15. PR REVIEW FEEDBACK & ARCHITECTURE RULE
==================================================
PR review comments from senior developers/reviewers are part of the
project's architectural guidance and MUST be followed for future changes.
When a reviewer identifies an architectural issue in a PR:
1. Understand the reason behind the comment.
2. Fix the issue in the current task where applicable.
3. Follow the same architectural pattern in future features.
4. Do not treat the comment as limited only to the file where it was raised.
5. If the comment represents a project-wide architectural pattern, apply it
   consistently across the project.

==================================================
X. NO HARDCODED STATIC / FALLBACK DATA IN COMPONENTS OR HOOKS
==================================================
Reusable static data, fallback data, mock data, configuration arrays,
options, labels, status definitions, category definitions, consumer
definitions, product definitions, and similar constant values MUST NOT
be declared directly inside React components or custom hooks.
Examples of data that should NOT live inside components/hooks:
- FALLBACK_CATEGORIES
- FALLBACK_CONSUMERS
- FALLBACK_PRODUCTS
- STATUS_OPTIONS
- CATEGORY_OPTIONS
- TABLE_CONFIG
- STATIC_FILTER_OPTIONS
- MOCK_DATA
- DEFAULT_CONFIG
- reusable configuration objects/arrays
Before creating such data:
1. Search the project for an existing constant/configuration.
2. If one already exists, reuse it.
3. If a new reusable constant is genuinely required, place it in the
   appropriate existing constants/configuration directory.
4. Import the constant into the component/hook where required.
Do NOT duplicate the same constant in multiple files.
Do NOT create fallback/mock data merely to hide missing API data.
If the application genuinely requires fallback data, keep that fallback
data in the appropriate constants/configuration layer and clearly name it
as fallback data.
Components should consume constants, not own reusable static datasets.
Hooks should consume constants, not define reusable static datasets.
Business/API data must continue to come from the existing API/data flow.
Do not replace real API data with hardcoded values unless explicitly
requested.
When moving existing hardcoded data to constants, preserve:
- exact values
- types
- ordering
- labels
- behaviour
- API flow
- UI behaviour
Only move the data location unless a separate business requirement
explicitly requests a behaviour change.

==================================================
16. REVIEW FIRST — IMPLEMENT ONLY AFTER APPROVAL
When asked to review, audit, or analyze code or PR feedback:
DO NOT modify code immediately.
Read the PR comments and inspect the complete affected flow.
Trace the issue through:
component
hook
API function
types
utilities
constants
mappers
existing consumers.
Determine whether the issue is:
already resolved
already handled by existing common logic
a real bug
an architecture/code-quality issue
intentional existing behavior.
Before implementation, provide a review/implementation report containing:
issue
root cause
affected files
existing common logic
proposed fix
business/API impact.
Wait for explicit user approval before implementing reviewed fixes.
When implementation is approved, implement ONLY the approved items.
Never convert a review/audit request into an automatic refactor.

==================================================
17. PR COMMENT VALIDATION RULE
Do not blindly implement a PR review suggestion.
For every reviewer comment:
Understand the actual problem behind the comment.
Inspect the current implementation.
Search the project for existing:
utilities
hooks
constants
types
components
shared logic.
Determine whether the comment is:
already resolved
partially resolved
still valid
not applicable because the existing architecture already handles it.
Prefer existing project patterns over creating new solutions.
Do not introduce duplicate helpers, abstractions, constants, or types only to satisfy the wording of a review comment.
Preserve existing business behavior unless a behavior change is explicitly requested.

==================================================
18. NO INVENTED BUSINESS / API VALUES
Never invent, guess, or fabricate business/API data through fallback values.
Do NOT use arbitrary fallback values for:
tax rates
GST rates
quantities
box quantities
prices
MRP
discount values
round-off values
charges
totals
IDs
statuses
API-derived labels.
If API data is missing:
Use an existing valid project fallback only when it is semantically
correct and already part of the project's business rules, OR
use the project's existing empty-state representation such as `—`,
null state, or equivalent, OR
handle the missing state explicitly.
Never fabricate a value merely to make the UI look complete.
Business calculations must use actual source data.

==================================================
19. BUSINESS CALCULATION LAYER RULE
Do not fix business calculations only at the final UI display layer.
Before changing a calculation:
Find where the raw values originate.
Find the existing calculation/helper.
Check whether the calculation is reused elsewhere.
Reuse or update the existing common calculation when appropriate.
Keep UI components primarily responsible for presentation.
Do not duplicate the same business calculation across:
component
hook
mapper
payload builder
unless each calculation has a genuinely different business purpose.
The same business rule must produce consistent values across:
form state
review/summary
detail page
API payload
list/detail views.

==================================================
20. API DATA PREFERENCE RULE
When the API already provides a field, use the API field as the source
of truth.
Do not guess, reconstruct, or derive a value from unrelated fields when
the canonical API field already exists, unless the existing business
logic explicitly requires that derivation.
Before deriving a value:
Check the API response type.
Check the actual API response when available.
Check existing mappers.
Check existing consumers.
Identify the canonical source field.
Prefer the canonical API field.

==================================================
21. STABLE LIST / REACT KEY RULE
Do not use array indexes as React keys for dynamic API-driven lists when
a stable identifier should exist.
For API entities:
Identify the canonical stable ID from the API/type.
Ensure the relevant type exposes that identifier.
Use the stable identifier as the React key.
Do not use `idx` merely to silence a React key warning.
If the API genuinely does not provide a stable identifier:
Confirm this from the API response/type.
Do not invent an ID.
Document the limitation before introducing a fallback key strategy.

==================================================
10. MANDATORY RESPONSIVE UI RULE
==================================================
Responsive behavior is a PROJECT-WIDE requirement.
Every new or modified page, component, modal, drawer, form, table,
filter section, card, header, footer, sidebar, dropdown, and other UI
MUST be considered for:
- mobile
- tablet
- desktop
- large desktop
Responsiveness must be implemented as part of the feature itself.
Do NOT treat responsiveness as an optional follow-up task.

==================================================
10.1 READ & AUDIT RESPONSIVENESS BEFORE CODING
==================================================
Before modifying UI:
1. Inspect the complete component/page layout.
2. Inspect its parent containers.
3. Inspect child components.
4. Search for existing responsive implementations in the project.
5. Reuse existing responsive patterns/components where possible.
6. Identify potential horizontal and vertical overflow.
7. Identify fixed widths/heights.
8. Identify desktop-only assumptions.

==================================================
10.2 MANDATORY VIEWPORT CONSIDERATION
==================================================
Responsive UI must be considered at minimum for:
- 320px
- 360px
- 375px
- 390px
- 430px
- 480px
- 640px
- 768px
- 1024px
- desktop / large desktop
Do not validate responsiveness only at one mobile breakpoint.
Pay special attention to 320px and 360px because these are very
constrained mobile widths.

==================================================
10.3 NO PAGE-LEVEL HORIZONTAL OVERFLOW
==================================================
Normal pages MUST NOT create horizontal browser/page scrolling.
The following must remain true on mobile:
document.documentElement.scrollWidth <= window.innerWidth
and:
document.body.scrollWidth <= window.innerWidth
Do NOT solve overflow by blindly adding:
overflow-x-hidden
to body, html, application root, or page wrapper.
First identify the actual element causing the overflow.
Fix the source of the overflow.

==================================================
10.4 TABLE RESPONSIVENESS
==================================================
Wide tables are allowed to require horizontal scrolling.
However, horizontal scrolling MUST be contained inside the table
container.
Preferred structure:
```tsx
<div className="w-full min-w-0 overflow-x-auto">
  <table className="min-w-max">
    ...
  </table>
</div>
```

==================================================
22. STRICT COMMON CODE & PR REVIEW ENFORCEMENT
==================================================
These rules are MANDATORY for every feature, bug fix, refactor, PR review,
and new UI implementation.
Before writing or modifying code, the agent MUST:
1. Read `.agents/AGENTS.md` completely.
2. Inspect the complete affected feature flow.
3. Search the COMPLETE `src` directory for existing:
   - components
   - types/interfaces
   - hooks
   - utilities
   - helpers
   - formatters
   - calculations
   - constants
   - mappers
   - API functions
   - shared UI components
4. Search specifically for the exact function/type/component name before
   creating a new implementation.
5. Search for semantically equivalent implementations, not only exact names.
6. Inspect existing consumers before moving or changing shared code.
7. Determine whether the required functionality:
   - already exists and should be reused
   - exists but needs extension
   - is duplicated and should be consolidated
   - genuinely needs a new implementation
8. ONLY create new shared code when no suitable existing implementation
   exists.

==================================================
22.1 TYPES
==================================================
Reusable interfaces and types MUST NOT be declared inside React components
when they belong to the feature/domain/type layer.
Before declaring an interface inside a component:
1. Search existing type files.
2. Search for the same interface name.
3. Search for equivalent interfaces.
4. Reuse or extend an existing type when possible.
Reusable types should be placed in the project's existing type architecture.
DO NOT create one-file-per-interface files merely to satisfy this rule.
Group related types in an existing appropriate type file when that improves
architecture and readability.

==================================================
22.2 COMMON FUNCTIONS & UTILITIES
==================================================
Reusable functions MUST NOT be implemented directly inside components when
they have project-wide or feature-wide reuse potential.
Examples include:
- date parsing
- date formatting
- currency formatting
- number formatting
- validation
- calculations
- mapping
- filtering
- sorting
- status conversion
- data transformation

==================================================
22.3 REVIEW COMMENTS ARE ENFORCEABLE RULES
==================================================
When a reviewer identifies an architectural issue, treat that comment as
project architectural guidance.

==================================================
22.4 NO BLIND IMPLEMENTATION
==================================================
The agent MUST NOT implement a task solely from the requested file name,
review comment, or proposed solution.
Never assume that a new helper/component/type is required.

==================================================
22.5 APPROVAL GATE FOR REVIEW/AUDIT TASKS
==================================================
When asked to review/audit: provide findings first.
When instructed to enhance and implement: proceed with approved scope.

==================================================
22.6 RESPONSIVE ENFORCEMENT
==================================================
Responsive behavior MUST be considered before implementing every UI change.
Inspect 320px, 360px, 375px, 390px, 430px, 480px, 640px, 768px, 1024px, desktop.
No page-level horizontal overflow.

==================================================
22.7 FINAL PRE-COMMIT CHECK
==================================================
Verify all items before concluding.
Run:
`npx tsc --noEmit`
`git diff --check`
`npm run build`
Never hide errors with `any` or `@ts-ignore`.

