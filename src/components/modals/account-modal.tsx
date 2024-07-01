'use client'

import { createContext, useContext, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'

interface AccountModalValues {
  isOpen: boolean
  onClose: () => void
}

interface IAccountModalProvider {
  readonly children: React.ReactNode
}

export const AccountModalContext = createContext<AccountModalValues>({
  isOpen: false,
  onClose: () => {}
})

export const AccountModalProvider = ({ children }: IAccountModalProvider) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AccountModalContext.Provider value={{ isOpen, onClose }}>
      {children}
    </AccountModalContext.Provider>
  )
}

export const AccountModal = () => {
  const { isOpen, onClose } = useContext(AccountModalContext)

  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={() => {}}
      className="relative z-50 focus:outline-none"
    >
      <div className="fixed inset-0 flex items-center justify-center overflow-y-hidden bg-gray-700/40 p-4">
        <DialogPanel className="max-h-full w-full max-w-xl rounded-xl bg-white px-5 py-6 backdrop-blur-2xl">
          <div className="flex flex-col items-center justify-center gap-y-9">
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between">
                <DialogTitle as="h2" className="text-3xl font-semibold">
                  Gestionar cuenta
                </DialogTitle>

                <button
                  className="rounded-md border border-gray-400/40 p-1"
                  onClick={onClose}
                >
                  <XMarkIcon className="size-5 fill-gray-700/80" />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center gap-y-2 pt-3">
                <div className="size-16 rounded-md bg-[#e6acac] p-4 text-center text-4xl">
                  J
                </div>
                <span className="flex flex-col justify-center text-2xl font-semibold tracking-tighter">
                  Juan
                </span>
              </div>

              <div className="pt-6">
                <div className="rounded-xl p-1">Admin</div>
              </div>

              <div className="w-full">
                <h3 className="mb-2 font-semibold tracking-tighter">
                  Detalles de la cuenta
                </h3>
                <div className="w-full space-y-2 divide-y divide-gray-400/40 rounded-lg border border-gray-400/40">
                  <div className="flex justify-between px-4 py-2">
                    <span className="text-indigo-500">Email</span>
                    <span>juanperez@gmail.com</span>
                  </div>
                  <div className="flex justify-between px-4 py-2">
                    <span className="text-indigo-500">Nombre</span>
                    <span>Juan Pérez</span>
                  </div>
                  <div className="flex justify-between px-4 py-2">
                    <span className="text-indigo-500">Teléfono</span>
                    <span>+1 234 567 890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
