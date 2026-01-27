src/
│
├── app/
│ ├── App.tsx
│ ├── main.tsx
│ ├── router.tsx
│ └── providers/
│ ├── AuthProvider.tsx
│ └── QueryProvider.tsx
│
├── features/
│ ├── auth/
│ │ ├── api.ts
│ │ ├── hooks.ts
│ │ ├── pages/
│ │ │ ├── Login.tsx
│ │ │ └── Register.tsx
│ │ └── types.ts
│ │
│ ├── members/
│ │ ├── api.ts
│ │ ├── hooks.ts
│ │ ├── components/
│ │ │ ├── MemberCard.tsx
│ │ │ └── MemberForm.tsx
│ │ ├── pages/
│ │ │ ├── MembersList.tsx
│ │ │ └── MemberDetails.tsx
│ │ └── types.ts
│ │
│ ├── payments/
│ │ ├── api.ts
│ │ ├── hooks.ts
│ │ ├── pages/
│ │ └── types.ts
│ │
│ ├── expenses/
│ │ ├── api.ts
│ │ ├── hooks.ts
│ │ ├── pages/
│ │ └── types.ts
│ │
│ └── analytics/
│ ├── api.ts
│ ├── hooks.ts
│ ├── pages/
│ │ └── Dashboard.tsx
│ └── components/
│
├── components/
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ ├── Modal.tsx
│ │ └── Table.tsx
│ │
│ ├── layout/
│ │ ├── Sidebar.tsx
│ │ ├── Navbar.tsx
│ │ └── PageLayout.tsx
│ │
│ └── charts/
│ ├── LineChart.tsx
│ └── BarChart.tsx
│
├── hooks/
│ ├── useAuth.ts
│ ├── useDebounce.ts
│ └── useModal.ts
│
├── lib/
│ ├── axios.ts
│ ├── queryClient.ts
│ └── constants.ts
│
├── styles/
│ └── index.css
│
├── types/
│ └── api.ts
│
└── utils/
├── formatCurrency.ts
├── formatDate.ts
└── validators.ts
