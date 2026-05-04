(function (blocks, blockEditor, element, components) {
  var el = element.createElement;
  var RichText = blockEditor.RichText;
  var MediaUpload = blockEditor.MediaUpload;
  var MediaUploadCheck = blockEditor.MediaUploadCheck;
  var URLInput = blockEditor.URLInput;
  var useBlockProps = blockEditor.useBlockProps;
  var Button = components.Button;
  var TextControl = components.TextControl;

  blocks.registerBlockType("artonskin/specialist-card", {
    edit: function (props) {
      var attr = props.attributes;
      var set = props.setAttributes;
      var blockProps = useBlockProps({ className: "specialist-card" });

      return el(
        "article",
        blockProps,

        el(
          "div",
          { className: "specialist-card__photo-wrap" },
          el(
            MediaUploadCheck,
            null,
            el(MediaUpload, {
              onSelect: function (media) {
                set({ photoUrl: media.url, photoAlt: media.alt || "" });
              },
              allowedTypes: ["image"],
              value: attr.photoUrl,
              render: function (ref) {
                return el(
                  Button,
                  {
                    className: attr.photoUrl
                      ? "specialist-card__photo-btn specialist-card__photo-btn--filled"
                      : "specialist-card__photo-btn",
                    onClick: ref.open,
                  },
                  attr.photoUrl
                    ? el("img", {
                        src: attr.photoUrl,
                        alt: attr.photoAlt,
                        className: "specialist-card__photo",
                      })
                    : el("span", { className: "specialist-card__photo-placeholder" }, "+ Photo")
                );
              },
            })
          )
        ),

        el(
          "div",
          { className: "specialist-card__info" },
          el(RichText, {
            tagName: "h3",
            className: "specialist-card__name",
            value: attr.name,
            onChange: function (val) { set({ name: val }); },
            placeholder: "Artist name",
          }),
          el(RichText, {
            tagName: "p",
            className: "specialist-card__role",
            value: attr.role,
            onChange: function (val) { set({ role: val }); },
            placeholder: "Specialization",
          }),
          el(RichText, {
            tagName: "p",
            className: "specialist-card__years",
            value: attr.years,
            onChange: function (val) { set({ years: val }); },
            placeholder: "e.g. 8 years of experience",
          }),
          el(RichText, {
            tagName: "p",
            className: "specialist-card__bio",
            value: attr.bio,
            onChange: function (val) { set({ bio: val }); },
            placeholder: "Short bio…",
          }),
          el(
            "div",
            { className: "specialist-card__cta-wrap" },
            el(TextControl, {
              label: "Button label",
              value: attr.ctaText,
              onChange: function (val) { set({ ctaText: val }); },
            }),
            el(URLInput, {
              label: "Button URL",
              value: attr.ctaUrl,
              onChange: function (val) { set({ ctaUrl: val }); },
            })
          )
        )
      );
    },

    save: function (props) {
      var attr = props.attributes;
      var blockProps = useBlockProps.save({ className: "specialist-card" });

      return el(
        "article",
        blockProps,

        attr.photoUrl &&
          el(
            "div",
            { className: "specialist-card__photo-wrap" },
            el("img", {
              src: attr.photoUrl,
              alt: attr.photoAlt || attr.name,
              className: "specialist-card__photo",
              loading: "lazy",
            })
          ),

        el(
          "div",
          { className: "specialist-card__info" },
          el(RichText.Content, {
            tagName: "h3",
            className: "specialist-card__name",
            value: attr.name,
          }),
          el(RichText.Content, {
            tagName: "p",
            className: "specialist-card__role",
            value: attr.role,
          }),
          el(RichText.Content, {
            tagName: "p",
            className: "specialist-card__years",
            value: attr.years,
          }),
          attr.bio &&
            el(RichText.Content, {
              tagName: "p",
              className: "specialist-card__bio",
              value: attr.bio,
            }),
          attr.ctaText &&
            el(
              "a",
              {
                href: attr.ctaUrl || "#contact",
                className: "specialist-card__cta",
              },
              attr.ctaText
            )
        )
      );
    },
  });
})(window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.components);
