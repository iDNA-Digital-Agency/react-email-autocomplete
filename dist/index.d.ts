import { default as default_2 } from 'react'
import * as React_2 from 'react'

export declare type ClassNames = Partial<Record<Elements, string>>

export declare const domains: [
   'aol.com',
   'att.net',
   'comcast.net',
   'facebook.com',
   'gmail.com',
   'gmx.com',
   'googlemail.com',
   'google.com',
   'hotmail.com',
   'hotmail.co.uk',
   'mac.com',
   'me.com',
   'mail.com',
   'msn.com',
   'live.com',
   'sbcglobal.net',
   'verizon.net',
   'yahoo.com',
   'yahoo.co.uk',
   'email.com',
   'fastmail.fm',
   'games.com',
   'gmx.net',
   'hush.com',
   'hushmail.com',
   'icloud.com',
   'iname.com',
   'inbox.com',
   'lavabit.com',
   'love.com',
   'outlook.com',
   'pobox.com',
   'protonmail.ch',
   'protonmail.com',
   'tutanota.de',
   'tutanota.com',
   'tutamail.com',
   'tuta.io',
   'keemail.me',
   'rocketmail.com',
   'safe-mail.net',
   'wow.com',
   'ygm.com',
   'ymail.com',
   'zoho.com',
   'bellsouth.net',
   'charter.net',
   'cox.net',
   'earthlink.net',
   'juno.com',
   'btinternet.com',
   'virginmedia.com',
   'blueyonder.co.uk',
   'live.co.uk',
   'ntlworld.com',
   'orange.net',
   'sky.com',
   'talktalk.co.uk',
   'tiscali.co.uk',
   'virgin.net',
   'bt.com',
   'sina.com',
   'sina.cn',
   'qq.com',
   'naver.com',
   'hanmail.net',
   'daum.net',
   'nate.com',
   'yahoo.co.jp',
   'yahoo.co.kr',
   'yahoo.co.id',
   'yahoo.co.in',
   'yahoo.com.sg',
   'yahoo.com.ph',
   '163.com',
   'yeah.net',
   '126.com',
   '21cn.com',
   'aliyun.com',
   'foxmail.com',
   'hotmail.fr',
   'live.fr',
   'laposte.net',
   'yahoo.fr',
   'wanadoo.fr',
   'orange.fr',
   'gmx.fr',
   'sfr.fr',
   'neuf.fr',
   'free.fr',
   'gmx.de',
   'hotmail.de',
   'live.de',
   'online.de',
   't-online.de',
   'web.de',
   'yahoo.de',
   'libero.it',
   'virgilio.it',
   'hotmail.it',
   'aol.it',
   'tiscali.it',
   'alice.it',
   'live.it',
   'yahoo.it',
   'email.it',
   'tin.it',
   'poste.it',
   'teletu.it',
   'bk.ru',
   'inbox.ru',
   'list.ru',
   'mail.ru',
   'rambler.ru',
   'yandex.by',
   'yandex.com',
   'yandex.kz',
   'yandex.ru',
   'yandex.ua',
   'ya.ru',
   'hotmail.be',
   'live.be',
   'skynet.be',
   'voo.be',
   'tvcablenet.be',
   'telenet.be',
   'hotmail.com.ar',
   'live.com.ar',
   'yahoo.com.ar',
   'fibertel.com.ar',
   'speedy.com.ar',
   'arnet.com.ar',
   'yahoo.com.mx',
   'live.com.mx',
   'hotmail.es',
   'hotmail.com.mx',
   'prodigy.net.mx',
   'yahoo.ca',
   'hotmail.ca',
   'bell.net',
   'shaw.ca',
   'sympatico.ca',
   'rogers.com',
   'yahoo.com.br',
   'hotmail.com.br',
   'outlook.com.br',
   'uol.com.br',
   'bol.com.br',
   'terra.com.br',
   'ig.com.br',
   'r7.com',
   'zipmail.com.br',
   'globo.com',
   'globomail.com',
   'oi.com.br',
]

export declare enum Elements {
   Wrapper = 'wrapper',
   Input = 'input',
   Dropdown = 'dropdown',
   Suggestion = 'suggestion',
   Username = 'username',
   Domain = 'domain',
}

/**
 * Controlled email input component.
 *
 * Read the documentation at: https://github.com/smastrom/react-email-autocomplete.
 */
export declare const Email: default_2.ForwardRefExoticComponent<
   Props &
      Events &
      Partial<Omit<default_2.HTMLProps<HTMLInputElement>, InternalInputProps | keyof Props | keyof Events>> &
      default_2.RefAttributes<HTMLInputElement>
>

export declare type EmailProps = Props &
   Events &
   Partial<Omit<React_2.HTMLProps<HTMLInputElement>, keyof Props | keyof Events | InternalInputProps>>

export declare type Events = {
   onFocus?: React_2.FocusEventHandler<HTMLInputElement>
   onBlur?: React_2.FocusEventHandler<HTMLInputElement>
   onKeyDown?: React_2.KeyboardEventHandler<HTMLInputElement>
   onInput?: React_2.FormEventHandler<HTMLInputElement>
}

export declare type InternalInputProps =
   | 'ref'
   | 'aria-expanded'
   | 'type'
   | 'role'
   | 'autoComplete'
   | 'aria-autocomplete'
   | 'aria-controls'

export declare type LocalizedList = {
   default: string[]
} & Record<string, string[]>

export declare type Maybe<T> = T | null

export declare type OnChange =
   | React_2.Dispatch<React_2.SetStateAction<string>>
   | ((newValue: string) => void | Promise<void>)

export declare type OnSelect = (object: OnSelectData) => void | Promise<void>

export declare type OnSelectData = {
   value: string
   keyboard: boolean
   position: number
}

export declare type Props = {
   /** State or portion of state to hold the email. */
   value: string | undefined
   /** State setter or custom dispatcher to update the email. */
   onChange: OnChange
   /** Domains to suggest while typing the username. */
   baseList: string[]
   /** Domains to refine suggestions after typing @. */
   refineList?: string[]
   /** Custom callback to invoke on suggestion select. */
   onSelect?: OnSelect
   /** Minimum chars required to display suggestions. */
   minChars?: Values
   /** Maximum number of suggestions to display. */
   maxResults?: Omit<Values, 1>
   /** Class names for each element. */
   classNames?: ClassNames
   /** Class name of the wrapper element. */
   className?: string
   /** Dropdown `aria-label` value */
   dropdownAriaLabel?: string
   /** Value of the `data-` attribute to be set on the focuesed/hovered suggestion. Defaults to `data-active-email`. */
   activeDataAttr?: `data-${string}`
   children?: React_2.ReactNode
   /** Dropdown placement.
    *
    * @deprecated Since version 1.0.0 dropdown is always placed below the input.
    */
   placement?: 'auto' | 'bottom'
   /** Custom prefix for dropdown unique ID.
    *
    * @deprecated Since version 1.2.0 it is generated automatically.
    */
   customPrefix?: string
   /** DOM ID of the wrapper element.
    *
    * @deprecated Since version 1.2.0
    */
   wrapperId?: string
   /** Input field validity state for assistive technologies.
    *
    * @deprecated Since version 1.2.0. Use `aria-invalid` instead.
    */
   isInvalid?: boolean
}

/**
 * Hook to automatically inject localized lists according to user's browser locale.
 *
 * Read the documentation at: https://github.com/smastrom/react-email-autocomplete.
 */
export declare function useLocalizedList(lists: LocalizedList, appLocale?: string): string[]

export declare type Values = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export {}
