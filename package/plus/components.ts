import type { Plugin } from 'vue';
// import { VIButton, VICardButton, VICol, VILabel, VIRow } from '@visix-ui/components';
import { VIButton } from '@visix-ui/components/button';
import { VICardButton } from '@visix-ui/components/card-button';
import { VICol } from '@visix-ui/components/col';
import { VILabel } from '@visix-ui/components/label';
import { VIRow } from '@visix-ui/components/row';

export default [VIButton, VICardButton, VICol, VILabel, VIRow] as Plugin[];
