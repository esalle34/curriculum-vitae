import { decodeTranslation } from "@/app/locales/helpers";
import parse from "html-react-parser";

interface Props {
  description: string;
  passionate: string;
  qualities: string;
  remote: string;
}

const DescriptionBlock = ({
  description,
  passionate,
  qualities,
  remote,
}: Props) => (
  <section className="flex flex-col pb-5 pt-3 text-sm">
    <p className="text-sky-800 leading-8">
      {parse(
        decodeTranslation({
          translation: description,
          options: { htmlTag: "span", className: "font-semibold" },
        })
      )}
    </p>
    <p className="text-sky-800 leading-8">
      {parse(
        decodeTranslation({
          translation: passionate,
          options: { htmlTag: "span", className: "font-semibold" },
        })
      )}
    </p>
    <p className="text-sky-800 leading-8">
      {parse(
        decodeTranslation({
          translation: qualities,
          options: { htmlTag: "span", className: "font-semibold" },
        })
      )}
    </p>
    <p className="text-sky-800 leading-8">
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
