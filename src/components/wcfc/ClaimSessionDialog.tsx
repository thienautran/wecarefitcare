import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { GOOGLE_FORM_URL } from '../../config/site';

interface ClaimSessionDialogProps {
  children: React.ReactNode;
  serviceTitle?: string;
}

export function ClaimSessionDialog({ children, serviceTitle }: ClaimSessionDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed z-50 top-1/2 left-1/2 w-[94vw] max-w-4xl h-[85vh] lg:h-[90vh] max-h-[900px] rounded-2xl bg-white shadow-2xl overflow-hidden focus:outline-none"
                initial={{ opacity: 0, scale: 0.96, x: '-50%', y: '-50%' }}
                animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                exit={{ opacity: 0, scale: 0.96, x: '-50%', y: '-50%' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                  <Dialog.Title className="font-heading font-semibold text-lg text-slate-800">
                    {serviceTitle ? `Claim Your Session — ${serviceTitle}` : 'Claim Your Session'}
                  </Dialog.Title>
                  <Dialog.Close
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-200"
                    aria-label="Close dialog"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                  </Dialog.Close>
                </div>

                {/* Google Form iframe */}
                <div className="h-[calc(100%-57px)]">
                  <iframe
                    src={GOOGLE_FORM_URL}
                    title="Claim your session form"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
