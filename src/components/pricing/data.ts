export interface benefit {
  title: string;
  active: boolean;
}
export interface plan {
  title: string;
  description: string;
  price: string[];
  benefits: benefit[];
  best: boolean;
}
export const plans: plan[] = [
  {
    best: false,
    title: "Standard",
    description: "The national average cost of buying coin easy.",
    price: ["5", "50"],
    benefits: [
      { title: "5 collections", active: true },
      { title: "Worldwide accessbility ", active: true },
      { title: "25 automation actions", active: true },
      { title: "Access all features", active: true },
      { title: "24 hours support", active: true },
      { title: "Sync accross devices", active: false },
      { title: "Share with more 5 users", active: false },
    ],
  },
  {
    best: true,
    title: "Premium+",
    description: "The national average cost of buying coin easy.",
    price: ["16", "160"],
    benefits: [
      { title: "Unlimited collections", active: true },
      { title: "Worldwide accessbility ", active: true },
      { title: "Unlimited automation actions", active: true },
      { title: "Access all features", active: true },
      { title: "24 hours support", active: true },
      { title: "Sync accross devices", active: true },
      { title: "Share with more 5 users", active: true },
    ],
  },
  {
    best: false,
    title: "Extended",
    description: "The national average cost of buying coin easy.",
    price: ["12", "120"],
    benefits: [
      { title: "Unlimited collections", active: true },
      { title: "Worldwide accessbility ", active: true },
      { title: "Unlimited automation actions", active: true },
      { title: "Access all features", active: true },
      { title: "24 hours support", active: true },
      { title: "Sync accross devices", active: true },
      { title: "Share with more 5 users", active: false },
    ],
  },
];
