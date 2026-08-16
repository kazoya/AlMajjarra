"use client";

import { QRCodeSVG } from "qrcode.react";
import { getWhatsAppPhoneDisplay, getWhatsAppQrValue, getWhatsAppUrl } from "@/lib/config";
import { useMounted } from "@/lib/use-mounted";

export function WhatsAppQr() {
  const mounted = useMounted();
  const qr = getWhatsAppQrValue();
  const link = getWhatsAppUrl();
  const phone = getWhatsAppPhoneDisplay();
  if (!qr || !link) return null;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex cursor-pointer items-center gap-3 rounded-xl border bg-card p-3 hover:border-gold/50"
    >
      <span className="rounded-md bg-white p-1">
        {mounted ? <QRCodeSVG value={qr} size={72} level="M" /> : <span className="block size-[72px] bg-white" />}
      </span>
      <span className="text-right text-sm">
        <span className="block font-medium">واتساب المصنع (من الموقع)</span>
        <span className="mt-1 block font-mono text-xs text-muted-foreground" dir="ltr">{phone}</span>
      </span>
    </a>
  );
}
