import defaultExport from "./numberLimitSchema";
import requiredSchema from "./requiredSchema";

import twIdSchema from "./strAcctSchema";

describe("testing numberLimit schema", () => {
  it("if input is max, 200 value is 230", async () => {
    const numberLimitSchema = defaultExport("max", 200);
    const errorMessage = "不可大於200";
    const result = await numberLimitSchema
      .validate("230")
      .catch((error) => error);
    expect(result.message).toBe(errorMessage);
  });

  it("if input is min, 0 value is -1 return 請大於0", async () => {
    const numberLimitSchema = defaultExport("min", 0);
    const result = await numberLimitSchema
      .validate("-1")
      .catch((error) => error);
    expect(result.message).toBe("請大於0");
  });

  it("if input is max, 200 value is 150 return true", async () => {
    const numberLimitSchema = defaultExport("max", 200);
    const result = await numberLimitSchema.isValid("150");
    expect(result).toBe(true);
  });
});

describe("testing requiredSchema", () => {
  it("should return true for a non-empty string", async () => {
    const schema = requiredSchema();
    const result = await schema.isValid("Hello");
    expect(result).toBe(true);
  });

  it("should return false for an empty string", async () => {
    const schema = requiredSchema();
    const result = await schema.isValid("");
    expect(result).toBe(false);
  });
});

describe("testing twIdSchema", () => {
  const schema = twIdSchema();

  it("should return true for a valid Taiwanese ID", async () => {
    const result = await schema.isValid("A123456789");
    expect(result).toBe(true);
  });

  it("should return false for an invalid Taiwanese ID with an incorrect first letter", async () => {
    const result = await schema.isValid("B123456789");
    expect(result).toBe(false);
  });

  it("should return false for an invalid Taiwanese ID with an incorrect sum", async () => {
    const result = await schema.isValid("A123456780");
    expect(result).toBe(false);
  });

  it("should return false for an empty string", async () => {
    const result = await schema.isValid("");
    expect(result).toBe(false);
  });

  it("should return false for an undefined value", async () => {
    const result = await schema.isValid(undefined);
    expect(result).toBe(false);
  });
});
