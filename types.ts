import React from 'react';
import { LucideIcon } from "lucide-react";

export interface TestimonialProps {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface BenefitProps {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}