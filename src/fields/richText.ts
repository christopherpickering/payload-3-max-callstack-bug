import type { Field, FieldBase } from 'payload'
import { defaultLexical } from './defaultLexical'
import { lexicalText } from './lexicalText'

type RichText = (options?: {
  required?: FieldBase['required']
  name?: FieldBase['name']
  label?: FieldBase['label']
  localized?: FieldBase['localized']
}) => [Field, Field]

export const richTextField: RichText = ({
  name = 'richText',
  label = false,
  required = false,
  localized = true,
} = {}) => {
  return [
    {
      name,
      type: 'richText',
      editor: defaultLexical,
      label,
      required,
      localized,
    },
    lexicalText(name, { name: `${name}_text` }),
  ]
}
