



enum direction {
    前,
    後,
    右,
    左,
    右前,
    左前,
    止まる,
}

enum lotation {
    左,
    右,
}




let con_le = 0;
let con_op = 0;


//% color="#3943c6" block="ﾊﾝﾄﾞﾒｲﾄﾞ･ｶｰ" icon="\uf1b9"

namespace eureka_blocks_car {

    export enum kyori {
        //% block="long"
        long,
        //% block="short",
        short
    }



    //% color="#ffa800" weight=99　blockId=servos_condition
    //% block="左右バランス調整 左へ |%le| 右へ" group="1　調整"
    //% le.min=-100 le.max=100
    export function condition(le: number): void {
        con_le = le;
    }

    //% color="#ffa800" weight=97　blockId=servos_op
    //% block="スピード調整 |%op|" group="1　調整"
    //% op.min=-95 op.max=0
    export function servo_op(op: number): void {
        con_op = op;
    }




    //% color="#3943c6" weight=71　blockId=servos_direction
    //% block="進行方向 |%sinkou_houkou| " group="2　基本の動き"
    export function car_derection(sinkou_houkou: direction): void {
        switch (sinkou_houkou) {
            case direction.後:
                if (con_le >= 0) {
                    pins.servoWritePin(AnalogPin.P13, 90 - (90 * (con_op + 100)) / 100 + con_le);
                    pins.servoWritePin(AnalogPin.P2, 90 + (90 * (con_op + 100)) / 100);
                }
                if (con_le < 0) {
                    pins.servoWritePin(AnalogPin.P13, 90 - (90 * (con_op + 100)) / 100);
                    pins.servoWritePin(AnalogPin.P2, 90 + (90 * (con_op + 100)) / 100 + con_le);
                }
                break;
            case direction.前:
                if (con_le >= 0) {
                    pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100 - con_le);
                    pins.servoWritePin(AnalogPin.P2, 90 - (90 * (con_op + 100)) / 100);
                }
                if (con_le < 0) {
                    pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
                    pins.servoWritePin(AnalogPin.P2, 90 - (90 * (con_op + 100)) / 100 - con_le);
                }
                break;
            case direction.右:
                pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
                pins.servoWritePin(AnalogPin.P2, 90);
                break;
            case direction.左:
                pins.servoWritePin(AnalogPin.P13, 90);
                pins.servoWritePin(AnalogPin.P2, 90 - (90 * (con_op + 100)) / 100);
                break;
            case direction.右前:
                pins.servoWritePin(AnalogPin.P13, 120);
                pins.servoWritePin(AnalogPin.P2, 80);
                break;
            case direction.左前:
                pins.servoWritePin(AnalogPin.P13, 100);
                pins.servoWritePin(AnalogPin.P2, 60);
                break;
            case direction.止まる:
                pins.digitalWritePin(DigitalPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
        }
    }




    //% color="#3943c6" weight=70　blockId=servos_direction
    //% block="進行方向 |%sinkou_houkou| 動作時間|%time_sec| 秒" group="2　基本の動き"
    export function car_derection_time(sinkou_houkou: direction, time_sec: number): void {
        switch (sinkou_houkou) {
            case direction.後:
                if (con_le >= 0) {
                    pins.servoWritePin(AnalogPin.P13, 90 - (90 * (con_op + 100)) / 100 + con_le);
                    pins.servoWritePin(AnalogPin.P2, 90 + (90 * (con_op + 100)) / 100);
                }
                if (con_le < 0) {
                    pins.servoWritePin(AnalogPin.P13, 90 - (90 * (con_op + 100)) / 100);
                    pins.servoWritePin(AnalogPin.P2, 90 + (90 * (con_op + 100)) / 100 + con_le);
                }
                basic.pause(time_sec * 1000);
                pins.digitalWritePin(DigitalPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case direction.前:
                if (con_le >= 0) {
                    pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100 - con_le);
                    pins.servoWritePin(AnalogPin.P2, 90 - (90 * (con_op + 100)) / 100);
                }
                if (con_le < 0) {
                    pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
                    pins.servoWritePin(AnalogPin.P2, 90 - (90 * (con_op + 100)) / 100 - con_le);
                }
                basic.pause(time_sec * 1000);
                pins.digitalWritePin(DigitalPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case direction.右:
                pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
                pins.servoWritePin(AnalogPin.P2, 90);
                basic.pause(time_sec * 1000);
                pins.digitalWritePin(DigitalPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case direction.左:
                pins.servoWritePin(AnalogPin.P13, 90);
                pins.servoWritePin(AnalogPin.P2, 90 - (90 * (con_op + 100)) / 100);
                basic.pause(time_sec * 1000);
                pins.digitalWritePin(DigitalPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case direction.右前:
                pins.servoWritePin(AnalogPin.P13, 120);
                pins.servoWritePin(AnalogPin.P2, 80);
                basic.pause(time_sec * 1000);
                pins.digitalWritePin(DigitalPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case direction.左前:
                pins.servoWritePin(AnalogPin.P13, 100);
                pins.servoWritePin(AnalogPin.P2, 60);
                basic.pause(time_sec * 1000);
                pins.digitalWritePin(DigitalPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
            case direction.止まる:
                pins.digitalWritePin(DigitalPin.P2, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                break;
        }
    }



    //% color="#3943c6" weight=63blockId=servos_lotation
    //% block="回転 |%lot_houkou| " group="2　基本の動き"
    export function car_lotation(lot_houkou: lotation): void {
        switch (lot_houkou) {
            case lotation.右:
                pins.servoWritePin(AnalogPin.P2, 90 - (90 * (con_op + 100)) / 100);
                pins.servoWritePin(AnalogPin.P13, 90 - (90 * (con_op + 100)) / 100);
                break;
            case lotation.左:
                pins.servoWritePin(AnalogPin.P2, 90 + (90 * (con_op + 100)) / 100);
                pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
                break;
        }

    }






    //% color="#3943c6" weight=59　blockId=servo_pro_bal
    //% block="前進方向オリジナル 左へ |%set_lr| 右へ" group="2　基本の動き"
    //% set_lr.min=-90 set_lr.max=90
    export function pro_bal(set_lr: number): void {
        pins.servoWritePin(AnalogPin.P2, 90 - (90 * (con_op + 100)) / 100);
        pins.servoWritePin(AnalogPin.P13, 90 + (90 * (con_op + 100)) / 100);
    }

    //% color="#3943c6" weight=58　blockId=servo_pro_LR
    //% block="|%lot_houkou| 車輪 出力 |%set_LR| " group="2　基本の動き"
    //% set_LR.min=-100 set_LR.max=100
    export function pro_LR(lot_houkou: lotation, set_LR: number): void {
        switch (lot_houkou) {
            case lotation.左:
                pins.servoWritePin(AnalogPin.P13, 90 + (90 * set_LR) / 100);

                break;
            case lotation.右:
                pins.servoWritePin(AnalogPin.P2, 90 - (90 * set_LR) / 100);
                break;
        }
    }

    //% color="#1E90FF" weight=51 blockId=wait_time1
    //% block="待ち時間 |%second| （秒) " group="2　基本の動き"
    export function wait_time1(second: number): void {
        basic.pause(second * 1000);
    }


    //% color="#009A00" weight=22 blockId=sonar_ping_2 block="Distance sensor" group="6 Ultrasonic_Distance sensor"
    //% advanced=true
    export function sonar_ping_2(): number {
        let d1 = 0;
        let d2 = 0;

        for (let i = 0; i < 5; i++) {
            // send
            basic.pause(5);
            pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
            pins.digitalWritePin(DigitalPin.P14, 0);
            control.waitMicros(2);
            pins.digitalWritePin(DigitalPin.P14, 1);
            control.waitMicros(10);
            pins.digitalWritePin(DigitalPin.P14, 0);
            // read
            d1 = pins.pulseIn(DigitalPin.P10, PulseValue.High, 500 * 58);
            d2 = d2 + d1;
        }
        return Math.round(Math.idiv(d2 / 5, 58) * 1.5);
    }

    //% color="#009A00" weight=30 block="(minimam 5cm) dstance |%limit| cm  |%nagasa| " group="6 Ultrasonic_Distance sensor"
    //% limit.min=5 limit.max=30
    //% advanced=true
    export function sonar_ping_3(limit: number, nagasa: kyori): boolean {
        let d1 = 0;
        let d2 = 0;
        if (limit < 8) {
            limit = 8
        }
        for (let i = 0; i < 5; i++) {
            // send
            basic.pause(5);
            pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
            pins.digitalWritePin(DigitalPin.P1, 0);
            control.waitMicros(2);
            pins.digitalWritePin(DigitalPin.P14, 1);
            control.waitMicros(10);
            pins.digitalWritePin(DigitalPin.P14, 0);
            // read
            d1 = pins.pulseIn(DigitalPin.P10, PulseValue.High, 500 * 58);
            d2 = d1 + d2;
        }
        switch (nagasa) {
            case kyori.short:
                if (Math.idiv(d2 / 5, 58) * 1.5 < limit) {
                    return true;
                } else {
                    return false;
                }
                break;
            case kyori.long:
                if (Math.idiv(d2 / 5, 58) * 1.5 < limit) {
                    return false;
                } else {
                    return true;
                }
                break;
        }
    }


}