type node = {
  "type": string,
  @set
  "name": string,
  "block": {"type": string, "children": array<string>},
}

@module("css-tree")
external parse: string => 'a = "parse"

@module("css-tree")
external generate: 'a => string = "generate"

@module("css-tree")
external walk: ('a, node => unit) => unit = "walk"
