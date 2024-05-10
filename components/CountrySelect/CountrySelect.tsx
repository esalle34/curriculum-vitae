"use client";
import { Countries, countriesArray } from "@/app/locales/constants";
import { Dispatch, SetStateAction } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

interface Props {
  country: Countries;
  setNewCountry: Dispatch<SetStateAction<Countries>>;
}

const CountrySelect = ({ country, setNewCountry }: Props) => (
  <select
    className="my-2 p-2 border-2 border-slate-300 rounded"
    defaultValue={country}
    onChange={(e) => setNewCountry(e.target.value as Countries)}
  >
    {countriesArray.map(([countryKey, countryValue]) => {
      return (
        <option key={countryValue} value={countryValue}>
          {countryKey} - {getUnicodeFlagIcon(countryValue)}
        </option>
      );
    })}
  </select>
);

export default CountrySelect;
