declare module "lucide-react" {
  import type * as React from "react";

  export type LucideProps = React.SVGProps<SVGSVGElement> & {
    absoluteStrokeWidth?: boolean;
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
  };

  export type LucideIcon = React.FC<LucideProps>;

  export const AlertTriangle: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const BadgeCheck: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const Circle: LucideIcon;
  export const Clock: LucideIcon;
  export const Download: LucideIcon;
  export const Eye: LucideIcon;
  export const Gift: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const PanelLeft: LucideIcon;
  export const Pause: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Star: LucideIcon;
  export const Volume2: LucideIcon;
  export const X: LucideIcon;
}
