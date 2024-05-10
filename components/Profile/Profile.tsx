import ProfileImage from "../ProfileImage";
import ProfileSkills from "../ProfileSkills";
import { Props as ProfileSkillsProps } from "../ProfileSkills/ProfileSkills";
import ProfileSocialeMedia from "../ProfileSocialMedia";
import { Props as ProfileSocialMedia } from "../ProfileSocialMedia/ProfileSocialMedia";

interface Props {
  profileSkills: ProfileSkillsProps;
  profileSocialMedial: ProfileSocialMedia;
}

const Profile = ({ profileSkills, profileSocialMedial }: Props) => (
  <div className="md:ml-4 flex flex-col w-full h-max md:w-60  md:border-2 rounded border-blue-800 md:shadow-xl">
    <ProfileImage />
    <ProfileSkills
      hardSkills={profileSkills.hardSkills}
      languages={profileSkills.languages}
      english={profileSkills.english}
      french={profileSkills.french}
      spanish={profileSkills.spanish}
    />
    <ProfileSocialeMedia contact={profileSocialMedial.contact} />
  </div>
);
export default Profile;
