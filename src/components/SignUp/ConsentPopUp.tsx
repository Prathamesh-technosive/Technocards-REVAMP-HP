import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ModalPopUp({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: any;
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#343a40] p-6 text-left align-middle text-white shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    Consent Agreement: Terms & Conditions and Privacy Policies
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-white">
                      I hereby declare that the user registration information
                      furnished is true and accurate and I understand it is my
                      responsibility to keep it updated with any changes
                      therein, immediately. In case any of the information is
                      found to be false or incorrect or misleading or
                      misrepresenting, I hereby agree and declare that
                      Technosive Ltd. is not liable for that.
                      <br />
                      <br />
                      By signing up, I agree that I have read, understood and
                      declare that I comply to the{" "}
                      <a
                        href="https://technosive.co.uk/terms"
                        target="_blank"
                        className="cursor-pointer text-blue-500 underline"
                      >
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://technosive.co.uk/privacy-policy"
                        target="_blank"
                        className="cursor-pointer text-blue-500 underline"
                      >
                        Privacy Policies
                      </a>{" "}
                      of Technosive Ltd.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
