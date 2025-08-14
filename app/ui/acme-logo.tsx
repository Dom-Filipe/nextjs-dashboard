// ui/acme-logo.tsx
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts'; // caminho relativo correto

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center gap-2 leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px] font-bold">Acme</p>
    </div>
  );
}
