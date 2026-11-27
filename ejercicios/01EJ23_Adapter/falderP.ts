import { Perr177 } from "./perr177";
import { Perr177Data } from "./perr177Data";
import { FPType } from "./fpType";
import { FPGender } from "./fpGender";

export class FalderP {
    public getData(): Perr177[] {
        return [
            new Perr177(101, [
                new Perr177Data(FPType.HUMAN, "rande", FPGender.MALE),
                new Perr177Data(FPType.HUMAN, "pichitito", FPGender.FEMALE),
                new Perr177Data(FPType.NO_HUMAN, "niranipi", FPGender.MALE)
            ]),
            new Perr177(102, [
                new Perr177Data(FPType.HUMAN, "niranipi", FPGender.FEMALE),
                new Perr177Data(FPType.NO_HUMAN, "rande", FPGender.FEMALE),
                new Perr177Data(FPType.NO_HUMAN, "pichitito", FPGender.MALE)
            ]),
            new Perr177(103, [])
        ];
    }
}
