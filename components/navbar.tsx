import Image from "next/image"
import React, { Fragment } from "react"
import { ExternalLinkIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'

const navigation = [
  { name: 'Join D23', href: '#', current: false },
  { name: 'EXPO News', href: '#', current: false },
]

const moreNavigation = [
  { name: 'Things To Know', href: '#', current: false },
  { name: 'Badge Management', href: '#', current: false },
  { name: 'Safety Guidelines', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <>
      <Disclosure as="nav" className="bg-[#070374]">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-2 pb-2">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#0F20A8] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center md:pl-5 w-max">
                    <Image
                      src="/images/Expo22_Horizontal_Logo_Platinum-new.png"
                      height={30}
                      width={268}
                    />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4 uppercase">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-[#0F20A8] text-white' : 'text-white hover:bg-[#0F20A8] hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <span className="pr-2">{item.name}</span>
                          <ExternalLinkIcon className="inline-block h-4 w-4" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* More Links Dropdown */}
                  <Menu as="div" className="ml-3 relative hidden sm:block z-10">
                    <div>
                      <Menu.Button className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#0F20A8] hover:text-white uppercase">
                        <span className="sr-only">Open more links</span>
                        <span className="pr-2">More</span>
                        <MenuIcon className="inline-block h-5 w-5" aria-hidden="true" />
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {moreNavigation.map((item) => (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black hover:bg-[#0F20A8] hover:text-white')}
                              >
                                <span className="pr-2">{item.name}</span>
                                <ExternalLinkIcon className="inline-block h-4 w-4" aria-hidden="true" />
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
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-[#0F20A8] text-white' : 'text-gray-300 hover:bg-[#0F20A8] hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <span className="pr-2">{item.name}</span>
                    <ExternalLinkIcon className="inline-block h-4 w-4" aria-hidden="true" />
                  </Disclosure.Button>
                ))}

                {moreNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-[#0F20A8] text-white' : 'text-gray-300 hover:bg-[#0F20A8] hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <span className="pr-2">{item.name}</span>
                    <ExternalLinkIcon className="inline-block h-4 w-4" aria-hidden="true" />
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
