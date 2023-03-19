export const NotificationPageTextInfo = {
    Approve: "Approve",
    Connect: "connect",
    Cancel: "cancel"
}

export const SignMessagePageTestIdInfo = {

    /**
     * test-id: reject, the rejrect button
     * test-id: sign, the sign button
     * test-id: password, the password input
     * test-id: submitPassword, the submit password button
     * test-id: url, the requester url
     * tes-tid: message, the message for sigining
     */

    Reject: 'reject',
    Sign: 'sign',
    Password: 'password',
    SubmitPassword: 'submitPassword',
    Url: 'url',
    Message: 'message',

    TransactionInputs: 'transaction.inputs',
    getTransactionInputByIdx: (idx: number) => `transaction.inputs[${idx}]`,
    getTransactionInputAddressByIdx: (idx: number) => `transaction.inputs[${idx}].address`,
    getTransactionInputTypeByIdx: (idx: number) => `transaction.inputs[${idx}].type`,
    getTransactionInputCapacityByIdx: (idx: number) => `transaction.inputs[${idx}].capacity`,

    TransactionOutputs: "transaction.outputs",
    getTransactionOutPutByIdx: (idx: number) => `transaction.outputs[${idx}]`,
    getTransactionOutputAddressByIdx: (idx: number) => `transaction.outputs[${idx}].address`,
    getTransactionOutputTypeByIdx: (idx: number) => `transaction.outputs[${idx}].type`,
    getTransactionOutputCapacityByIdx: (idx: number) => `transaction.outputs[${idx}].capacity`,

}

export const GrantPageTestIdInfo = {

    /**
     * Anchors:
     *
     * test-id: grant the grant button
     * test-id: reject the reject button
     */

    Grant: 'grant',
    Reject: 'reject'


}
