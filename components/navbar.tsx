import Image from "next/image"
import React, { Fragment } from "react"
import { ExternalLinkIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { Disclosure, Menu, Transition } from "@headlessui/react"

const navigation = [
  { name: "Join D23", href: "#", current: false },
  { name: "EXPO News", href: "#", current: false },
]

const moreNavigation = [
  { name: "Things To Know", href: "#", current: false },
  { name: "Badge Management", href: "#", current: false },
  { name: "Safety Guidelines", href: "#", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function NavBar() {
  return (
    <>
      <Disclosure as="nav" className="bg-[#070374]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 pt-2 pb-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#0F20A8] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex w-max flex-shrink-0 items-center md:pl-5">
                    <Image
                      src="/images/Expo22_Horizontal_Logo_Platinum-new.png"
                      height={30}
                      width={268}
                    />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 uppercase">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#0F20A8] text-white"
                              : "text-white hover:bg-[#0F20A8] hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <span className="pr-2">{item.name}</span>
                          <ExternalLinkIcon
                            className="inline-block h-4 w-4"
                            aria-hidden="true"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* More Links Dropdown */}
                  <Menu as="div" className="relative z-10 ml-3 hidden sm:block">
                    <div>
                      <Menu.Button className="rounded-md px-3 py-2 text-sm font-medium uppercase text-white hover:bg-[#0F20A8] hover:text-white">
                        <span className="sr-only">Open more links</span>
                        <span className="pr-2">More</span>
                        <MenuIcon
                          className="inline-block h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {moreNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-black hover:bg-[#0F20A8] hover:text-white"
                                )}
                              >
                                <span className="pr-2">{item.name}</span>
                                <ExternalLinkIcon
                                  className="inline-block h-4 w-4"
                                  aria-hidden="true"
                                />
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#0F20A8] text-white"
                        : "text-gray-300 hover:bg-[#0F20A8] hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <span className="pr-2">{item.name}</span>
                    <ExternalLinkIcon
                      className="inline-block h-4 w-4"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                ))}

                {moreNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#0F20A8] text-white"
                        : "text-gray-300 hover:bg-[#0F20A8] hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <span className="pr-2">{item.name}</span>
                    <ExternalLinkIcon
                      className="inline-block h-4 w-4"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
