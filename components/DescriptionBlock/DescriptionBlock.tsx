import { decodeTranslation } from "@/app/locales/helpers";
import parse from "html-react-parser";

interface Props {
  description: string;
  qualities: string;
  remote: string;
}

const DescriptionBlock = ({ description, qualities, remote }: Props) => (
  <section className="flex flex-col pt-2 pb-8">
    <p className="text-blue-800 leading-8">
      {parse(
        decodeTranslation({
          translation: description,
          options: { htmlTag: "span", className: "font-semibold" },
        })
      )}
    </p>
    <p className="text-blue-800 leading-8">
      {parse(
        decodeTranslation({
          translation: qualities,
          options: { htmlTag: "span", className: "font-semibold" },
        })
      )}
    </p>
    <p className="text-blue-800 leading-8">
      {parse(
        decodeTranslation({
          translation: remote,
          options: { htmlTag: "span", className: "font-semibold" },
        })
      )}
    </p>
  </section>
);

export default DescriptionBlock;
