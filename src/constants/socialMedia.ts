import type { SocialNetwork } from "../types/socialMedia";

import { DiGithubBadge } from "react-icons/di";
import { IoIosMail } from "react-icons/io";

export const SOCIAL_LINKS : Array<SocialNetwork> = [
	{
		name: 'Correo electrónico',
		username: 'tlapanco.amado@gmail.com',
		url: 'mailto:tlapanco.amado@gmail.com',
		Icon: IoIosMail,

	},
	{
		name: 'Github',
		username: 'tlapanco',
		url: 'https://github.com/tlapanco',
		Icon: DiGithubBadge
	}
]