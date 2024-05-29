# hugo site

hugo port currently in progress

## dev commands

```bash
# run server with drafts
hugo server -D
```

## code snippets that might be useful
process photo
```html
    <div id="content">
      {{- block "main" . }}{{- end }} {{ $image := .Resources.GetMatch
      "headshot.jpg" }} {{ $image := $image.Resize "800" }}
      <img
        src="{{ $image.RelPermalink }}"
        width="{{ $image.Width }}"
        height="{{ $image.Height }}"
      />
    </div>
```