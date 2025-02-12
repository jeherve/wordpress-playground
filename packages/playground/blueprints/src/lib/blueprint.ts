import {
	SupportedPHPExtensionBundle,
	SupportedPHPVersion,
} from '@php-wasm/universal';
import { StepDefinition } from './steps';

export interface Blueprint {
	/**
	 * The URL to navigate to after the blueprint has been run.
	 */
	landingPage?: string;
	/**
	 * The preferred PHP and WordPress versions to use.
	 */
	preferredVersions?: {
		/**
		 * The preferred PHP version to use.
		 * If not specified, the latest supported version will be used
		 */
		php: SupportedPHPVersion | 'latest';
		/**
		 * The preferred WordPress version to use.
		 * If not specified, the latest supported version will be used
		 */
		wp: string | 'latest';
	};
	features?: {
		/** Should boot with support for network request via wp_safe_remote_get? */
		networking?: boolean;
	};
	/**
	 * The PHP extensions to use.
	 */
	phpExtensionBundles?: SupportedPHPExtensionBundle[];
	/**
	 * The steps to run.
	 */
	steps?: Array<StepDefinition | string | undefined | false | null>;
}
