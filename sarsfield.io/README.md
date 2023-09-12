# hugo site

hugo port currently in progress

## dev commands

```bash
# run server with drafts
hugo server -D
```

## code snippets
process photo
```html
    <div id="content">
      {{- block "main" . }}{{- end }} {{ $image := .Resources.GetMatch
      "headshot.jpg" }} {{ $image := $image.Resize "x400" }}
      <img
        src="{{ $image.RelPermalink }}"
        width="{{ $image.Width }}"
        height="{{ $image.Height }}"
      />
    </div>
```