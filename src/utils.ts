function capitalize(textToCapitalize: string): string {
  const capitalizedText =
    textToCapitalize[0].toUpperCase() + textToCapitalize.slice(1);

  return capitalizedText;
}

export { capitalize };
