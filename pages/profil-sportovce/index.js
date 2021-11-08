import { H3, H4, XlWrapper, DelimiterWide } from "@src/atoms";
import { ProfileCard, PlaceCard, TrainerCard } from "@src/molecules";
import { DynamicSite } from "@src/templates";
import { UserProfileTemplate } from "../../src/templates/UserProfileTemplate";

export default function UserProfile() {
	return (
		<DynamicSite>
			<UserProfileTemplate />
		</DynamicSite>
	);
}
