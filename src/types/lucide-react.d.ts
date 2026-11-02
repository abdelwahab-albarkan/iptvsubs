declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    title?: string;
  }

  export type LucideIcon = React.ComponentType<LucideProps>;

  export const Scale: LucideIcon;
  export const Wrench: LucideIcon;
  export const Layers: LucideIcon;
  export const Calendar: LucideIcon;
  export const Info: LucideIcon;

  export const Tv: LucideIcon;
  export const Tv2: LucideIcon;
  export const MonitorPlay: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Laptop: LucideIcon;
  export const Box: LucideIcon;
  export const Radio: LucideIcon;
  export const Zap: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const Flame: LucideIcon;
  export const Star: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Search: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Clock: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Lock: LucideIcon;
  export const Award: LucideIcon;
  export const Film: LucideIcon;
  export const Globe: LucideIcon;
  export const Headphones: LucideIcon;
  export const Mail: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Send: LucideIcon;
  export const DollarSign: LucideIcon;
  export const Users: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const TrendingDown: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const AlertOctagon: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const Wifi: LucideIcon;
  export const Cpu: LucideIcon;
  export const Key: LucideIcon;
  export const Play: LucideIcon;
  export const PlayCircle: LucideIcon;
  export const Home: LucideIcon;
  export const Download: LucideIcon;
  export const Settings: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Share: LucideIcon;
  export const Share2: LucideIcon;
  export const Copy: LucideIcon;
  export const Bookmark: LucideIcon;
  export const Compass: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Tag: LucideIcon;
  export const Gift: LucideIcon;
  export const MonitorSmartphone: LucideIcon;
  export const LayoutGrid: LucideIcon;
  export const Handshake: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Trophy: LucideIcon;
  export const Gauge: LucideIcon;
  export const Server: LucideIcon;
  export const BadgeCheck: LucideIcon;
  export const CreditCard: LucideIcon;
  export const Quote: LucideIcon;
  export const Phone: LucideIcon;
  export const Signal: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const Sun: LucideIcon;
  export const Moon: LucideIcon;

  const icons: { [key: string]: LucideIcon };
  export default icons;
}
