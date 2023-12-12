export type ModalProps = {
  trigger: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  open?: boolean;
  openChange: (e: any) => void;
};
