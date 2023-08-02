/* eslint-disable react/prop-types */
import { RadioGroup, Stack, Radio } from "@chakra-ui/react";

const CountrySelector = ({ setCountry }) => {
  return (
    <RadioGroup defaultValue="2" onChange={(e) => setCountry(e)}>
      <Stack spacing={0} direction="column">
        <Radio
          colorScheme="green"
          value="united states"
          size={"md"}
          defaultChecked={true}
        >
          United States
        </Radio>
        <Radio colorScheme="green" value="canada" size={"md"}>
          Canada
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default CountrySelector;
