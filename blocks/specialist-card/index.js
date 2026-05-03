(function (blocks, blockEditor, element) {
  var el = element.createElement;
  var RichText = blockEditor.RichText;
  var MediaUpload = blockEditor.MediaUpload;
  var MediaUploadCheck = blockEditor.MediaUploadCheck;
  var useBlockProps = blockEditor.useBlockProps;
  var Button = window.wp.components.Button;

  blocks.registerBlockType("artonskin/specialist-card", {
    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
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
                setAttributes({ photoUrl: media.url, photoAlt: media.alt });
              },
              allowedTypes: ["image"],
              value: attributes.photoUrl,
              render: function (ref) {
                return el(
                  Button,
                  {
                    className: attributes.photoUrl
                      ? "specialist-card__photo-btn specialist-card__photo-btn--filled"
                      : "specialist-card__photo-btn",
                    onClick: ref.open,
                  },
                  attributes.photoUrl
                    ? el("img", {
                        src: attributes.photoUrl,
                        alt: attributes.photoAlt,
                        className: "specialist-card__photo",
                      })
                    : el(
                        "span",
                        { className: "specialist-card__photo-placeholder" },
                        "Add Photo"
                      )
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
            value: attributes.name,
            onChange: function (val) {
              setAttributes({ name: val });
            },
            placeholder: "Artist Name",
          }),
          el(RichText, {
            tagName: "p",
            className: "specialist-card__role",
            value: attributes.role,
            onChange: function (val) {
              setAttributes({ role: val });
            },
            placeholder: "Specialization",
          }),
          el(RichText, {
            tagName: "p",
            className: "specialist-card__years",
            value: attributes.years,
            onChange: function (val) {
              setAttributes({ years: val });
            },
            placeholder: "Years of experience",
          })
        )
      );
    },

    save: function (props) {
      var attributes = props.attributes;
      var blockProps = useBlockProps.save({ className: "specialist-card" });

      return el(
        "article",
        blockProps,
        attributes.photoUrl &&
          el(
            "div",
            { className: "specialist-card__photo-wrap" },
            el("img", {
              src: attributes.photoUrl,
              alt: attributes.photoAlt || attributes.name,
              className: "specialist-card__photo",
            })
          ),
        el(
          "div",
          { className: "specialist-card__info" },
          el(RichText.Content, {
            tagName: "h3",
            className: "specialist-card__name",
            value: attributes.name,
          }),
          el(RichText.Content, {
            tagName: "p",
            className: "specialist-card__role",
            value: attributes.role,
          }),
          el(RichText.Content, {
            tagName: "p",
            className: "specialist-card__years",
            value: attributes.years,
          })
        )
      );
    },
  });
})(window.wp.blocks, window.wp.blockEditor, window.wp.element);
